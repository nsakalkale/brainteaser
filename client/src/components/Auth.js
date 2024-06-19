import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import logo from "../images/logo.svg";

//LOGIN

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length > 8) {
      newErrors.password = "Password cannot be more than 8 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await axios.post(process.env.REACT_APP_LOGIN, {
        email,
        password,
      });
      setMessage(JSON.stringify(response.data.message));
    } catch (error) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <>
      <title>LogIn</title>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="p-4 bg-white border rounded col-md-4">
          <center>
            <img src={logo} width={50} alt="Logo" />
            <h1>
              <b>LogIn</b>
            </h1>
          </center>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                autoComplete="off"
                type="email"
                id="email"
                className={`qinput ${errors.email && "is-invalid"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                autoComplete="off"
                type="password"
                id="password"
                className={`qinput ${errors.password && "is-invalid"}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <center>
              <button type="submit" className="qbtn qbtn-db">
                Login
              </button>
            </center>
          </form>
          {message && <div className="mt-3 alert alert-info">{message}</div>}
        </div>
      </div>
    </>
  );
};

const Signup = () => {
  const [formData, setFormData] = useState({
    regno: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.regno) {
      newErrors.regno = "Registration Number is required";
    }
    if (!formData.fname) {
      newErrors.fname = "First Name is required";
    }
    if (!formData.lname) {
      newErrors.lname = "Last Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length > 8) {
      newErrors.password = "Password cannot be more than 8 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await axios.post(process.env.REACT_APP_SIGNUP, formData);
      setMessage(JSON.stringify(response.data.message));
    } catch (error) {
      setMessage(JSON.stringify(error.response.data.message));
    }
  };

  return (
    <>
      <title>Sign Up</title>
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded border col-md-4 p-4"
          >
            <center>
              <img src={logo} width={50} alt="Logo" />
              <h1>
                <b>Sign Up</b>
              </h1>
            </center>
            <br />
            <div className="mb-3">
              <label htmlFor="regno" className="form-label">
                Registration Number:
              </label>
              <input
                autoComplete="off"
                type="text"
                id="regno"
                name="regno"
                className={`qinput ${errors.regno && "is-invalid"}`}
                value={formData.regno}
                onChange={handleChange}
              />
              {errors.regno && (
                <div className="invalid-feedback">{errors.regno}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                First Name:
              </label>
              <input
                autoComplete="off"
                type="text"
                id="fname"
                name="fname"
                className={`qinput ${errors.fname && "is-invalid"}`}
                value={formData.fname}
                onChange={handleChange}
              />
              {errors.fname && (
                <div className="invalid-feedback">{errors.fname}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="lname" className="form-label">
                Last Name:
              </label>
              <input
                autoComplete="off"
                type="text"
                id="lname"
                name="lname"
                className={`qinput ${errors.lname && "is-invalid"}`}
                value={formData.lname}
                onChange={handleChange}
              />
              {errors.lname && (
                <div className="invalid-feedback">{errors.lname}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                className={`qinput ${errors.email && "is-invalid"}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                autoComplete="off"
                type="password"
                id="password"
                name="password"
                className={`qinput ${errors.password && "is-invalid"}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <center>
              <button type="submit" className="qbtn qbtn-db">
                Sign Up
              </button>
            </center>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
          </form>
        </div>
      </div>
    </>
  );
};

export default function Auth() {
  const location = useLocation();
  const path = location.pathname;
  const [isLogin, setIsLogin] = useState(path === "/login" ? true : false);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    navigate(isLogin ? "/signup" : "/login");
  };

  return (
    <>
      <div className="container mt-3">
        {isLogin ? <Login /> : <Signup />}
        <div className="d-flex justify-content-center mb-3 mt-3">
          <button className="qbtn qbtn-db me-2" onClick={toggleAuthMode}>
            {isLogin ? "Go to Sign Up" : "Go to Login"}
          </button>
        </div>
      </div>
    </>
  );
}
