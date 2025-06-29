import React, { useEffect, useState } from "react";
import '../Styles.css';


const LoginPage = () => {
  const [ email, setEmail ] = useState('');
  const [password, setPassword] =useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
      const savedEmail = localStorage.getItem("userEmail");
      if(savedEmail) {
         setEmail(savedEmail);
      }
  },[]);

  useEffect(() => {
  localStorage.clear("userEmail");
}, []);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", email);
    if (!email || !password) {
      alert("Please Enter both email and password.");
      return;
    }
    alert(`Logging with in:\nemail:${email}:\npassword:${password}`);
  };
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="colorful-heading">
          <span className="G">Welcome</span>
          <span className="o1"> to </span>
          <span className="o2"> SkyChat🤖</span>
        </h2>
        
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
          type="email"
          aria-label="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <label>Password:</label>
          <input
          id="password"
          type={ showPassword ? "text": "password" }
          aria-label="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          <div className="show-password">
            <input
             id="togglePassword"
             type="checkbox"
             checked= {showPassword}
             onChange={(e) => setShowPassword(prev => !prev)} 
          /> 
          <label htmlFor="togglePassword">Show Password</label>
           </div>


          <button type="submit">Login</button>
         </form>

      </div>
    </div>
   
  );
};

export default LoginPage;
