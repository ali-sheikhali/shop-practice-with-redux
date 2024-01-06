import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart, plusToCart, minesToCart } from "../../store/cartSlice";
import SumCart from "../SumCart";
import Footer from "../Footer";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeHandle = (id) => {
    dispatch(removeCart(id));
  };
  const plusHandle = (id) => {
    dispatch(plusToCart(id));
  };
  const minesHandle = (id) => {
    dispatch(minesToCart(id));
  };
  const productCart = (
    <div className="grid md:grid-cols-4 w-7/12 md:w-10/12 mx-auto gap-3 my-10">
      {products.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col relative border rounded-md space-y-3  h-[350px]"
          >
            <figure className="shadow-md w-full">
              <img className="h-[150px] mx-auto py-5" src={item.image} alt="" />
            </figure>
            <div className=" text-center space-y-1">
              <p className="h-16 overflow-hidden px-2">{item.title}</p>
              <p className="bg-gray-200">price: ${item.price} </p>
            </div>
            <div className="border w-6/12 mx-auto flex justify-around">
              <button
                onClick={() => minesHandle(item.id)}
                className="border w-full"
              >
                -
              </button>

              <span className="border flex justify-center w-full">
                {item.count}
              </span>
              <button
                className="border flex justify-center w-full"
                onClick={() => plusHandle(item.id)}
              >
                +
              </button>
            </div>
            <button
              type="submit"
              onClick={() => removeHandle(item.id)}
              className="w-full text-white py-1 bg-red-400 absolute rounded-b-md bottom-0"
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
  return (
    <div>
      <div className="flex mx-auto">
        <div className="w-8/12">{productCart}</div>

        <div className="w-4/12 mt-6 p-5">
          <SumCart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
