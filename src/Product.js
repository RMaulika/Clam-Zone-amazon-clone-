import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket >>> ", basket);

  const addToBasket = () => {
    // Dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price.toFixed(2)}</strong> {/* Format price to 2 decimal places */}
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p key={i}>⭐</p> // Added key for list items
          ))}
        </div>
      </div>
      <img src={image} alt={title} /> {/* Added alt text for accessibility */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;