import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import logo from "../images/logo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });
      setMessage(JSON.stringify(response.data.message));
    } catch (error) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            autoComplete="off"
            type="email"
            id="email"
            className="qinput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            autoComplete="off"
            type="password"
            id="password"
            className="qinput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:8080/api/signup",
        formData
      );
      setMessage(JSON.stringify(response.data.message));
    } catch (error) {
      setMessage(JSON.stringify(error.response.data.message));
    }
  };

  return (
    <>
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
                className="qinput"
                value={formData.regno}
                onChange={handleChange}
              />
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
                className="qinput"
                value={formData.fname}
                onChange={handleChange}
              />
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
                className="qinput"
                value={formData.lname}
                onChange={handleChange}
              />
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
                className="qinput"
                value={formData.email}
                onChange={handleChange}
              />
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
                className="qinput"
                value={formData.password}
                onChange={handleChange}
              />
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
  const [isLogin, setIsLogin] = useState(true);
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
