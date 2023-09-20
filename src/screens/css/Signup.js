import React, { useState } from "react";
import cn from "classnames"; // Assuming you have 'classnames' installed locally
import { Link } from "react-router-dom";
import "./css/Signup.css";

export default function Signup() {
  const [isSignInActive, setIsSignInActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignInActive(false);
    console.log("Sign Up button clicked");
  };

  const handleSignInClick = () => {
    setIsSignInActive(true);
    console.log("Sign In button clicked");
  };

  return (
    <div>
      <div
        className={cn("container", { "right-panel-active": isSignInActive })}

        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <Link to="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link to="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleSignUpClick}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <Link to="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link to="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="#">Forgot your password?</Link>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }