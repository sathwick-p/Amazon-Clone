import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("This is the basket >>", basket);

  const addToBasket = () => {
    // dispatch the item into datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
