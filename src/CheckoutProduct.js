import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id, title, image, price, rating}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
          <small>$</small>
          <strong>{price}</strong>
          <div className="checkoutProduct__price">
            {Array(rating)
              .fill()
              .map((_) => (
                // eslint-disable-next-line
                <span>🌟</span>
              ))}
          </div>
          <button onClick={removeFromBasket} className="button">
            Remove from Basket
          </button>
      </div>
    </div>
  );
}

export default CheckoutProduct
