import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both email and password are filled
    if (email.trim() !== "" && password.trim() !== "") {
      // Redirect to ControlPage
      navigate("/controlpage");
    } else {
      alert("Please fill in both email and password fields.");
    }
  };

  const handleSignin = () => {
    navigate("/CreateAccount");
  };

  

  return (
    <div>
      <Navbar />
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="m-2">Login Page</h1>
        <div className="form-group m-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary m-2"
          // disabled={!email || !password }
        >
           Log In
        </button>
        <p className="m-2">Dont have an account?<br></br>Let's create one! Press the button below to create your Official Account with us.</p>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleSignin}
        >
         Create Account
        </button>
      </form>
    </div>
  );
}
