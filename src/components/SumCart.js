import React from "react";
import { useSelector } from "react-redux";

function SumCart() {
  const productCart = useSelector((state) => state.cart);

  const sumCart = productCart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div className="w-full flex flex-col space-y-5 py-8 text-center border">
      <div>
        <span className="text-xl font-bold"> total price: </span> ${sumCart}
      </div>
      <form>
        <input
          type="text"
          placeholder="enter discount code..."
          className="border focus:outline-none p-1 rounded-l-md"
        />
        <button
          type="submit"
          className="bg-green-500 p-1 text-white rounded-r-md"
        >
          {" "}
          Enter Code
        </button>
      </form>
      <button
        type="submit"
        className="bg-yellow-500 w-6/12 mx-auto p-1 text-white rounded-md"
      >
        {" "}
        CheckOut
      </button>
    </div>
  );
}

export default SumCart;
