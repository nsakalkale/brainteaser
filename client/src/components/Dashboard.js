import React from "react";
import Navbar from "./essentials/Navbar";
import Quiz from "../images/quiz.png";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <title>Dashboard</title>
      <div className="p-2 p-xl-3 p-lg-3 p-sm-2 p-md-3 bg-db text-white">
        <div className="row">
          <div className="col-md-6 mt-3 order-2 order-md-1 d-flex justify-content-center align-items-center">
            <div className="container-fluid">
              <center>
                <h2>
                  <b>
                    Why Brain<span style={{ color: "lightblue" }}>Teaser</span>{" "}
                    ?
                  </b>
                </h2>

                <div className="row d-flex justify-content-center ">
                  <div className="d-flex justify-content-center align-items-center col-sm-3 text-black px-3 py-2 p-md-3 me-md-2 mt-3 design-box d-flex justify-content-center align-items-center">
                    <h6>
                      <b>
                        Ultimate Mental Playground <br />
                        🧩
                      </b>
                    </h6>
                  </div>
                  <div className="col-sm-3 text-black px-3 py-2 p-md-3 me-md-2 mt-3 design-box d-flex justify-content-center align-items-center">
                    <h6>
                      <b>Unleash Your Full Potential 🧠</b>
                    </h6>
                  </div>
                  <div className="col-sm-3 text-black px-3 py-2 p-md-3 me-md-2 mt-3 design-box d-flex justify-content-center align-items-center">
                    <h6>
                      <b>Ignite Analytical Skills 🔥</b>
                    </h6>
                  </div>
                  <div className="col-sm-3 text-black px-3 py-2 p-md-3 me-md-2 mt-3 design-box d-flex justify-content-center align-items-center">
                    <h6>
                      <b>
                        Labyrinth of Logic and <br /> Reasoning 🤔
                      </b>
                    </h6>
                  </div>
                  <div className="col-sm-3 text-black px-3 py-2 p-md-3 me-md-2 mt-3 design-box d-flex justify-content-center align-items-center">
                    <h6>
                      <b>Mind-Sharpening Tool 🛠️</b>
                    </h6>
                  </div>
                  <div className="col-sm-3 text-black px-3 py-2 p-md-3 me-md-2 mt-3 design-box d-flex justify-content-center align-items-center">
                    <h6>
                      <b>Mental Gymnastics 🤸‍♀️</b>
                    </h6>
                  </div>
                  <div className="col-sm-3 text-black px-3 py-2 p-md-3 me-md-2 mt-3 design-box d-flex justify-content-center align-items-center">
                    <h6>
                      <b>Continuous Learning and Discovery 🌱</b>
                    </h6>
                  </div>
                  <div className="col-sm-3 text-black px-3 py-2 p-md-3 me-md-2 mt-3 design-box d-flex justify-content-center align-items-center">
                    <h6>
                      <b>Embrace the Challenge 🚀</b>
                    </h6>
                  </div>
                </div>
              </center>
            </div>
          </div>
          <div className="col-md-6 mt-3 order-1 order-md-2 d-flex justify-content-center align-items-center">
            <div className="container-fluid">
              <center>
                <img src={Quiz} alt="Quiz" className="img-fluid" />
              </center>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <center>
          <h1>
            <b>🎯 Quizes Offered...</b>
          </h1>
        </center>
        <br />
        <div className="row">
          <div className="col-md-3">
            <div className="m-2 bg-white border rounded p-4 hover">
              <h1 className="text-center">1️⃣0️⃣⏳🤙</h1>
              <h5 className="text-center">
                <b>10-Minute Quiz: No Negative Marking</b>
              </h5>
              <h6>
                <b>Key Points:</b>
              </h6>
              <ul className="text-muted">
                <li>Duration: 10 minutes</li>
                <li>No negative marking</li>
                <li>Time-efficient and straightforward</li>
                <li>Encourages participation without the fear of penalty</li>
              </ul>
              <div className="text-center">
                <Link
                  to="/quiz"
                  state={{
                    duration: 10,
                    negativeMarking: 0,
                    multipleCorrect: 0,
                  }}
                >
                  <button className="qbtn qbtn-db">
                    <b>Take Quiz !</b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="m-2 bg-white border rounded p-4 hover">
              <h1 className="text-center">2️⃣0️⃣⏳🤙</h1>
              <h5 className="text-center">
                <b>20-Minute Quiz: No Negative Marking</b>
              </h5>
              <h6>
                <b>Key Points:</b>
              </h6>
              <ul className="text-muted">
                <li>Extended to 20 minutes</li>
                <li>No deduction for wrong answers</li>
                <li>More complex, when compared to 10-Minute Quiz</li>
                <li>Fosters active engagement</li>
              </ul>
              <div className="text-center">
                <Link
                  to="/quiz"
                  state={{
                    duration: 20,
                    negativeMarking: 0,
                    multipleCorrect: 0,
                  }}
                >
                  <button className="qbtn qbtn-db">
                    <b>Take Quiz !</b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="m-2 bg-white border rounded p-4 hover">
              <h1 className="text-center">1️⃣0️⃣⏳❎</h1>
              <h5 className="text-center">
                <b>10-Minute Quiz: Negative Marking</b>
              </h5>
              <h6>
                <b>Key Points:</b>
              </h6>
              <ul className="text-muted">
                <li>Duration: 10 minutes</li>
                <li>Deduction of -1 for each wrong answer</li>
                <li>Assesses thinking speed.</li>
                <li>Fosters active engagement</li>
              </ul>
              <div className="text-center">
                <Link
                  to="/quiz"
                  state={{
                    duration: 10,
                    negativeMarking: 1,
                    multipleCorrect: 0,
                  }}
                >
                  <button className="qbtn qbtn-db">
                    <b>Take Quiz !</b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="m-2 bg-white border rounded p-4 hover">
              <h1 className="text-center">1️⃣0️⃣⏳✔️</h1>
              <h5 className="text-center">
                <b>10-Minute Quiz: Multiple Correct</b>
              </h5>
              <h6>
                <b>Key Points:</b>
              </h6>
              <ul className="text-muted">
                <li>Duration: 10 minutes</li>
                <li>Multiple correct answers</li>
                <li>Tests understanding and accuracy</li>
                <li>Partial deduction for wrong answers</li>
              </ul>
              <div className="text-center">
                <Link
                  to="/quiz"
                  state={{
                    duration: 10,
                    negativeMarking: 0,
                    multipleCorrect: 1,
                  }}
                >
                  <button className="qbtn qbtn-db">
                    <b>Take Quiz !</b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
