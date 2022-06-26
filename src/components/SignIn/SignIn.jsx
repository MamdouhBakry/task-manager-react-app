import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userAction";
import "./Signin.scss";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let auth = useSelector((state) => state.user);
  let authen = auth.authenticate;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <div className="row login-form mt-5">
        <form
          onSubmit={userLogin}
          className="col-4 mx-auto card py-5 pe-5 mt-5 text-primary shadow"
        >
          <h3 className="mb-3 text-center">Login Form</h3>
          <div className="row mb-4">
            <label className="col-3">Email</label>
            <input
              className="col-9"
              type="email"
              id="email"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row mb-4">
            <label className="col-3">Password</label>
            <input
              className="col-9"
              type="password"
              id="email"
              placeholder="Enter Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary w-25 mx-auto">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
