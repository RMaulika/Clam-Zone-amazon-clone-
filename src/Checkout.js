import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue(); // Removed dispatch if not directly used here

  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="/banner8.png"
          alt="Checkout Advertisement" // Added alt text
        />

        <div>
          {/* User greeting */}
          <h3 className="checkout__userGreeting">Hello, {user?.email || 'Guest'}</h3>

          {/* Shopping Basket Title */}
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {/* Render Checkout Products */}
          {basket.length === 0 ? (
            <div className="checkout__empty">
              <p>Your Shopping Basket is empty.</p>
              <p>Select "Proceed to checkout" to purchase items.</p>
            </div>
          ) : (
            basket.map((item, index) => ( // Added index for key, though item.id is better if unique
              <CheckoutProduct
                key={item.id || index} // Use item.id as key if unique, fallback to index
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          )}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;