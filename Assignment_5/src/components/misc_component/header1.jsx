import React from 'react'
import Logo2 from "../images/log.svg";
export default function Header1() {
  return (
    <div>
      <div className="row">
        <div className="col-12 text-center">
          <img src= {Logo2} alt=""  height="150px" width="150px"  />
        </div>

        <div className="col-12">
          <h1 className="custom-main-h1-1 text-secondary text-center">
            <span>44,6782</span> numbers of supporters worldwide
          </h1>
        </div>

        {/*line */}
        <span className="line2"></span>
      </div>

      {/* <img src={Logo} alt="" className=" custom-logo img-thumbnail"  /> */}
    </div>
  );
}
