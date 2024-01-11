import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ShowShop() {

  const [show, setShow] = useState([]);
  const dispatch = useDispatch();

  const addToCartHandle = (item) => {
    
    dispatch(addToCart(item));
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setShow(res.data);
      })
      .catch((error) => {
        alert("404");
      });
  }, []);

  return (
    <div className="grid md:grid-cols-4 w-7/12 md:w-10/12 mx-auto gap-3 my-10">
      {show.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col relative border rounded-md space-y-3  h-[300px]"
          >
            <figure className="shadow-md w-full">
              <img className="h-[150px] mx-auto py-5" src={item.image} alt="" />
            </figure>
            <div className=" text-center space-y-1">
              <p className="h-16 overflow-hidden px-2">{item.title}</p>
              <p className="bg-gray-200">price: ${item.price} </p>
            </div>
            <button
              type="submit"
              onClick={() => addToCartHandle(item)}
              className="w-full text-white py-1 bg-blue-400 absolute rounded-b-md bottom-0"
            >
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ShowShop;
