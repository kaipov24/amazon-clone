import React from 'react'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import './Checkout.css'

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((it) => (
            <CheckoutProduct
              id={it.id}
              title={it.title}
              image={it.image}
              price={it.price}
              rating={it.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout
