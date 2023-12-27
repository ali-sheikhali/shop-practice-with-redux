import React from "react";
import { useSelector } from "react-redux";
function Cart() {
  const products = useSelector(state => state.Cart);
  console.log(products);


  const productCart=  products.map((product) => {
    return <div key={product.id}>{product.title}</div>;
  })
  return (
    <div>
      {productCart}
    </div>
  );
}

export default Cart;
