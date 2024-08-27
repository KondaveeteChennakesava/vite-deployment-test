import React from "react";
import { dataObj } from "./dummydata";
import Product from "./product";

function ProductList() {
  return (
    <div style={{ display: "grid", gridTemplateColumns:"repeat(3, 1fr)"}}>
      {dataObj.map((data, index) => {
        return <Product data={data} />;
      })}
    </div>
  );
}

export default ProductList;