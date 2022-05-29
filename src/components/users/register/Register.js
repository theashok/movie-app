import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/users/users.actions";

let Register = () => {
  let history = useHistory();
  let dispatch = useDispatch();

  let [emptyForm, setEmptyForm] = useState(false);

  let [user, setUser] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
  });

  let [userError, setUserError] = useState({
    firstnameError: null,
    lastnameError: null,
    mobileError: null,
    emailError: null,
    passwordError: null,
  });

  // handle Firstname
  let handleFirstName = (e) => {
    setUser({ ...user, firstname: e.target.value });
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    if (regExp.test(e.target.value)) {
      setUserError({ ...userError, firstnameError: "" });
    } else {
      setUserError({ ...userError, firstnameError: "Enter a proper Name" });
    }
  };

  let handleLastName = (e) => {
    setUser({ ...user, lastname: e.target.value });
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    if (regExp.test(e.target.value)) {
      setUserError({ ...userError, lastnameError: "" });
    } else {
      setUserError({ ...userError, lastnameError: "Enter a proper Name" });
    }
  };

  let handleMobile = (e) => {
    setUser({ ...user, mobile: e.target.value });
    let regExp = /^[0-9]{4,10}$/;
    if (regExp.test(e.target.value)) {
      setUserError({ ...userError, mobileError: "" });
    } else {
      setUserError({ ...userError, mobileError: "Enter a proper Mobile No" });
    }
  };

  // handle Email
  let handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
    let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (regExp.test(e.target.value)) {
      setUserError({ ...userError, emailError: "" });
    } else {
      setUserError({ ...userError, emailError: "Enter a proper Email" });
    }
  };

  // handle password
  let handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if (regExp.test(e.target.value)) {
      setUserError({ ...userError, passwordError: "" });
    } else {
      setUserError({ ...userError, passwordError: "Enter a proper Password" });
    }
  };

  // submitRegister
  let submitRegister = (e) => {
    e.preventDefault();
    if (user.firstname !== "" && user.email !== "" && user.password !== "") {
      dispatch(registerUser(user, history));
    } else {
      setEmptyForm(true);
    }
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 m-auto ">
            {emptyForm && (
              <div className="alert alert-danger alert-dismissible animated zoomIn">
                <button className="close" onClick={(e) => setEmptyForm(false)}>
                  <i className="fa fa-times-circle" />
                </button>
                <small className="font-weight-bold">
                  Please fill in the details
                </small>
              </div>
            )}
            <div className="card">
              <div className="card-header bg-light text-info">
                <p className="h4">Register Here</p>
              </div>
              <div className="card-body">
                <form onSubmit={submitRegister}>
                  <div className="form-group">
                    <input
                      name="firstname"
                      value={user.firstname}
                      onChange={handleFirstName}
                      type="text"
                      className={`form-control ${
                        userError.firstnameError ? "is-invalid" : ""
                      }`}
                      placeholder="Name"
                    />
                    {userError.firstnameError ? (
                      <small className="text-danger">
                        {userError.firstnameError}
                      </small>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      name="lastname"
                      value={user.lastname}
                      onChange={handleLastName}
                      type="text"
                      className={`form-control ${
                        userError.lastnameError ? "is-invalid" : ""
                      }`}
                      placeholder="Name"
                    />
                    {userError.lastnameError ? (
                      <small className="text-danger">
                        {userError.lastnameError}
                      </small>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      name="mobile"
                      value={user.mobile}
                      onChange={handleMobile}
                      type="text"
                      className={`form-control ${
                        userError.mobileError ? "is-invalid" : ""
                      }`}
                      placeholder="Name"
                    />
                    {userError.mobileError ? (
                      <small className="text-danger">
                        {userError.mobileError}
                      </small>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      value={user.email}
                      onChange={handleEmail}
                      type="email"
                      className={`form-control ${
                        userError.emailError ? "is-invalid" : ""
                      }`}
                      placeholder="Email"
                    />
                    {userError.emailError ? (
                      <small className="text-danger">
                        {userError.emailError}
                      </small>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      value={user.password}
                      onChange={handlePassword}
                      type="password"
                      className={`form-control ${
                        userError.passwordError ? "is-invalid" : ""
                      }`}
                      placeholder="Password"
                    />
                    {userError.passwordError ? (
                      <small className="text-danger">
                        {userError.passwordError}
                      </small>
                    ) : null}
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-info btn-sm"
                      value="Register"
                    />
                  </div>
                </form>
                <small>
                  Have an Account ?
                  <Link to="/users/login" className="text-info">
                    {" "}
                    Login
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Register;
