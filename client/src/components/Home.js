import React from "react";
import { Link, NavLink } from "react-router-dom";
import main_bg from "../images/main_bg.svg";
import logo from "../images/logo.svg";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <title>Welcome to BrainTeaser !!</title>
      <img src={main_bg} class="background-image" alt="BG" />
      <div className="container-fluid welcome-page">
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <center>
            <img src={logo} width={100} alt="Logo" />
            <br />
            <br />
            <h1>
              <b>BrainTeaser : Where Minds Get Twisted and Logic Unleashed!</b>
            </h1>
            <h4>
              <Typewriter
                options={{
                  strings: [
                    "Welcome to BrainTwister! 🧠🔥 The Ultimate Playground for Mind Benders!",
                    "Prepare to have your gray matter challenged! 🤯 Brainteasers await!",
                    "Put on your thinking caps and get ready to twist! 🧠💭 Logic meets fun!",
                    "Embark on a journey of mental gymnastics! 🤸‍♂️ Stretch your brain muscles!",
                    "Unleash your inner genius! 💡 BrainTwister will blow your mind!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <br />
            <div className="d-flex justify-content-center">
              <Link to="/dashboard">
                <button className="qbtn qbtn-db me-3">Login</button>
              </Link>
              <button className="qbtn qbtn-db">SignUp</button>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
