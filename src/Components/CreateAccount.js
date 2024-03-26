import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


export default function CreateAccount(){
  const navigate = useNavigate();

  const [email , setEmail] = useState("");
  const [password, setPassword]  = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email.trim() !== "" && password.trim() !== "") {
      navigate("/ControlPage")
    }

    else {
      alert ("All fields are mandatory")
    }
  }

  const handleSignin = () => {
    navigate("/RegisterPage")
  }

  return (
        <div>
          <Navbar />
          <form className="container" onSubmit={handleSubmit}>
            <h1 className="m-2">Create Account</h1>
            <div className="form-group m-2">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="form-control"
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
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary m-2"
              // disabled={!email || !password}
            >
              Create Account
            </button>
            <p className="m-2">Already have an account! Sign in within seconds.</p>
            <button
              type="button"
              className="btn btn-primary m-2"
              onClick={handleSignin}
            >
              Sign In
            </button>
          </form>
        </div>
      );
}
