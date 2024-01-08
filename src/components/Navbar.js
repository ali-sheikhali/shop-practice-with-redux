import React, { Fragment } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdLogin } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const products = useSelector((state) => state.cart);
  return (
    <div className="w-full bg-blue-800 py-2 ">
      <div className="w-9/12 mx-auto flex justify-between">
        <div className="flex flex-col relative w-24">
          <Menu>
            <Menu.Button className="text-white mt-2">More Details</Menu.Button>
            <Transition
              className="absolute top-9 bg-blue-500 z-10 px-2 rounded-md  text-black"
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="flex flex-col space-y-1  w-36">
                <Menu.Item className="text-black hover:bg-slate-300 border-b-2 border-gray-700">
                  {({ active }) => (
                    <Link
                      to="/best-products"
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-black"
                      } block px-4 py-2 text-sm`}
                    >
                      Best Products
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item  className="text-black hover:bg-slate-300">
                  {({ active }) => (
                    <Link
                      to="/best-products"
                      // className={`${
                      //   active ? "bg-blue-500 text-white" : "text-black"
                      // } block px-4 py-2 text-sm`}
                    >
                      Best Products
                    </Link>
                  )}
                </Menu.Item>
               
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div>
          <Link to="/">
            {" "}
            <p className="text-white font-bold text-3xl">shop</p>
          </Link>
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
              <span className="font-bold text-2xl ml-3">
                <IoCartOutline />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
