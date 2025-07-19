import React, { useState, useEffect } from 'react';
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { db } from './firebase';
import { collection, doc, setDoc } from "firebase/firestore";

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  useEffect(() => {
    const getClientSecret = async() => {
        const response = await axios({
            method: 'post',
            url: `http://localhost:5001/clone-7b619/us-central1/api/payments/create?total=${getBasketTotal(basket) * 100}`
        })
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket])
  console.log('THE SECRET IS >>>', clientSecret)
  console.log('👩', user)
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    try {
      const payload = await stripe.confirmCardPayment(clientSecret, {payment_method: {
        card: elements.getElement(CardElement)
        }
    });
    const paymentIntent = payload.paymentIntent;

    await setDoc(
      doc(collection(db, 'users', user?.uid, 'orders'), paymentIntent.id),
      {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      }
    );
    dispatch({
      type: 'EMPTY_BASKET'
    });

    setSucceeded(true);
    setError(null)
    setProcessing(false)
        
    navigate('/orders', { replace: true });
    } catch (error) {
        console.error("Payment failed:", error);
    setError(error.message);
    setProcessing(false);
  }
};
  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                <Link to="/checkout">{basket?.length} items</Link>
                )
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Hyderbad, Telangana</p>
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                   ))}
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment__priceContainer'>
                            <CurrencyFormat renderText={(value) => (
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                {processing ? <p>Processing</p> : <span>Buy Now</span>}
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Payment;