import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../redux/actions/userAction";

function SignUp() {
  const navigete = useNavigate();
  const auth = useSelector((state) => state.user);
  let authen = auth.authenticate;
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (auth.loading) {
    return <p>Loading .....!</p>;
  }

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
    setTimeout(() => {
      navigete("/");
    }, 500);
  };
  return (
    <>
      <div className="row login-form mt-5">
        <form
          onSubmit={userSignup}
          className="col-5 mx-auto card py-5 pe-5 mt-5 text-primary shadow"
        >
          <h3 className="mb-4 text-center">SignUp Form</h3>
          <div className="row mb-4">
            <label id="fname" className="col-4 text-start">
              First Name
            </label>
            <input
              className="col-8"
              type="text"
              id="fname"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="row mb-4">
            <label id="lname" className="col-4 text-start">
              Last Name
            </label>
            <input
              className="col-8"
              type="text"
              id="lname"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="row mb-4">
            <label htmlFor="email" className="col-4 text-start">
              Email
            </label>
            <input
              className="col-8"
              type="Email"
              id="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row mb-5">
            <label htmlFor="pasword" className="col-4 text-start">
              Password
            </label>
            <input
              className="col-8"
              type="password"
              id="password"
              placeholder="Enter Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary w-25 mx-auto">
            SignUp
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
