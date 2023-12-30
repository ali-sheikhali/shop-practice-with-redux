import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdLogin } from "react-icons/md";

function Navbar() {
  const products = useSelector(state => state.cart)
  // console.log(products);
  return (
    <div className="w-full bg-blue-800 py-2 ">
      <div className="w-9/12 mx-auto flex justify-between">
        <div>
         <Link to="/"> <p className="text-white font-bold text-3xl">shop</p></Link>
        </div>
        <div className="flex">
        <Link to="./login">
          <div className="mr-5 font-bold text-2xl ml-3 text-white mt-1">
             <MdLogin />
          </div>
        </Link>
        <Link to="./cart">
          <div className="text-white flex   mt-1">
           
            {products.length}
            <span className='font-bold text-2xl ml-3'><IoCartOutline /></span>
          </div>
        </Link>
        </div>
       
      </div>
    </div>
  );
}

export default Navbar;
