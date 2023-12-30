import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function LogOrSign() {
  return (
    <div>
      <div className="w-10/12 md:w-5/12 mx-auto border rounded-md py-5 mt-10">
        <form className="flex flex-col space-y-5 ">
          <h1 className="font-bold text-2xl text-center">SIGN IN</h1>
          <div className="flex justify-around">
            <input
              type="text"
              className="border rounded-md focus:outline-none p-1"
              placeholder="Enter Your Name..."
            />
            <input
              type="text"
              className="border rounded-md focus:outline-none p-1"
              placeholder="Enter Your Family..."
            />
          </div>
          <div className="w-6/12 mx-auto flex flex-col space-y-5">
            <input
              type="email"
              className="border rounded-md focus:outline-none p-1 w-full"
              placeholder="Enter Your Email..."
            />
            <input
              type="password"
              className="border rounded-md focus:outline-none p-1 w-full"
              placeholder="Enter Your password..."
            />
            <input
              type="password"
              className="border rounded-md focus:outline-none p-1 w-full"
              placeholder="Enter Your confirm password..."
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 w-8/12 mx-auto rounded-md text-white py-1"
          >
            Sign in
          </button>
        </form>
        <div className="mt-10 w-11/12 mx-auto relative">
          <hr />
          <span className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Other
          </span>
        </div>

        <div className="mt-10 flex justify-center space-x-5 w-6/12 mx-auto">
          <span className="border border-black rounded-full p-2">
            <FaGoogle />
          </span>
          <span className="border border-black rounded-full p-2">
            {" "}
            <FaFacebookF />
          </span>
          <span className="border border-black rounded-full p-2">
            <FaXTwitter />
          </span>
        </div>
        <p className="text-center mt-5">
          have you already account?{" "}
          <span className="font-bold cursor-pointer" onClick={loginHandle}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default LogOrSign;
