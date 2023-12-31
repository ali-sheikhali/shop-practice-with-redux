import React from "react";

function LoginAccount({ showLogin }) {

  return (
    <div>
      <div className="w-10/12 md:w-5/12 mx-auto border rounded-md py-5 mt-10 h-[350px]">
      <h1 className="font-bold text-2xl text-center">SIGN IN</h1>
        <form className="flex flex-col mt-16 space-y-10 ">
    
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
              type="password"
              className="border rounded-md focus:outline-none p-1 w-full"
              placeholder="Enter Your password..."
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 w-8/12 mx-auto rounded-md text-white py-1"
          >
            Login
          </button>
        </form>
        {/* <div className="mt-10 w-11/12 mx-auto relative">
          <hr />
          <span className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Other
          </span>
        </div> */}

        {/* <p className="text-center mt-5">
          have not you already account?{" "}
          <span className="font-bold cursor-pointer" >
            sign in
          </span>
        </p> */}
      </div>
    </div>
  );
}

export default LoginAccount;
