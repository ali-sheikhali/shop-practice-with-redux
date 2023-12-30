import React from 'react'
import LogOrSign from '../LogOrSign'
import Footer from '../Footer'
import { useState } from 'react'
import LoginAccount from '../LoginAccount'
function Login() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      

      {showLogin ? <LoginAccount /> :  <LogOrSign />} 
        <Footer />
    </div>
  )
}

export default Login