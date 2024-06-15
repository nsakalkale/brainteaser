import React from "react";
import logo from "../../images/logo.svg";

export default function Navbar() {
  return (
    <>
      <div className="bg-white shadow-sm p-xl-3 p-lg-3 p-2 p-sm-2 p-md-3 d-flex align-items-center justify-content-between">
        <div className="d-flex justify-content-start align-items-center">
          <img
            src={logo}
            alt="Profile_Img"
            className="img-fluid rounded-circle me-3"
            width={20}
          />
          <b>Hi, Nimish👋</b>
        </div>
        <div className="">
          <button className="qbtn qbtn-db">Logout</button>
        </div>
      </div>
    </>
  );
}
