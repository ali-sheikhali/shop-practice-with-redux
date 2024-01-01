import React from "react";
import LogOrSign from "../LogOrSign";
import Footer from "../Footer";
import { useState } from "react";
import LoginAccount from "../LoginAccount";
function Login() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div>
      {showLogin ? <LoginAccount /> : <LogOrSign />}
      <button className="w-10/12 md:w-5/12 ml-11 md:ml-[443px]  border rounded-md my-5  " onClick={toggleLogin}>
        {showLogin ? (
          <p className="text-center my-5">
            have not you already account?{" "}
            <span className="font-bold cursor-pointer">sign in</span>
          
          </p>
        ) : (
          <p className="text-center my-5">
            have you already account?{" "}
            <span className="font-bold cursor-pointer">Login</span>
          </p>
        )}
      </button>
     
      <Footer />
    </div>
  );
}

export default Login;
