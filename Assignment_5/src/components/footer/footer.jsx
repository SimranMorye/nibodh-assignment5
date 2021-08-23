import React from "react";
import Logo from "../images/log.svg";
export default function footer() {
  return (
    <div class="sam">
      <img className="img-fluid footImg" src={Logo} alt="" />
      <p className="logot text-uppercase"></p>
      <div className="row justify-content-evenly mt-4 py-4 ">
        <div className="col-8 foot">
          <ul class="nav justify-content-center h-100 align-items-center customUL">
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                RESOURCES
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DONATION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                EVENTS
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-2 mt-5 mx-50 px-50">
            <div className="">
              <h6>About Us</h6>
              <p style={{ fontSize: "15px" }}>
               We're curious,passionate,and committed to helping nonprofits learn and grow.
              </p>
            </div>
          </div>
          <div className="col-4 mt">
            <div className="row">
              <div className="col-6">
                <div style={{ marginLeft: "90px" }}>
                  <h6>COMPANY</h6>
                  <ul
                    style={{
                      listStyle: "none",
                      fontSize: "14px",
                      padding: "0",
                      align: "center",
                    }}
                  >
                    <li>HOME</li>
                    <li>ABOUT US </li>
                    <li>RESOURCES</li>
                    <li>CONTACT US</li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <ul
                  style={{
                    listStyle: "none",
                    fontSize: "14px",
                    padding: "0",
                    marginTop: "40px",
                  }}
                >
                  <li>SERVICES</li>
                  <li> DONATION</li>
                  <li>EVENTS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 mt">
            <div className="row">
              <div className="col-5">
                <h6>OPENING HOURS</h6>
                <div>
                  <i className="fas fa-phone-alt"></i> &nbsp;+91-842374511
                </div>
                <div>
                  <i className="fas fa-envelope"></i>{" "}
                  &nbsp;simranmorye03@gmail.com
                </div>
              </div>
              <div className="col-6">
                <h6 style={{ letterSpacing: "4px" }}>FOLLOW US</h6>
                <div className="icons" style={{ paddingLeft: "30px" }}>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-pinterest-square"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
