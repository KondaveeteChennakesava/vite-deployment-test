import React from "react";
import './products.css'

function Product(props) {
  return (
    <div className="card">
      <h1>{props.data.productName}</h1>
      <p>{props.data.productId}</p>
      <p>{props.data.rating}</p>
      <p>{props.data.warranty}</p>
      <p>{props.data.inStock}</p>
      <p>{props.data.price}</p>
      <ul>
        {props.data.features.map((feature, idx) => {
          return <li>{feature}</li>;
        })}
      </ul>
    </div>
  );
}

export default Product;
