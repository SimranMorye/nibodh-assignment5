import React from 'react'

export default function Graph() {
  var array1 = [
    { name: "Education", val: 40 },
    { name: "Care", val: 65 },
    { name: "Fundraising", val: 50 },
    { name: "Advocacy", val: 85 },
  ];

  return (
    <div>
      <div className="row custom-misc-2-con-chart">
        <div className="col-5 text-white">
          <h1> WHERE THE  <br /> MONEY GOES</h1>
          <h5>Current operations and program <br /> spending breakdown</h5>
          <ul style={{ color: "#92658f" }}>
            {["Education", "Care", "Fundraising", "Advocacy"].map((data) => (
              <li>{data}</li>
            ))}
          </ul>

          <button
            className="btn btn-primary pill"
            style={{ backgroundColor: "#67adb4", borderRadius: "30px" }}
          >
            DONATE NOW
          </button>
        </div>
        <div className="col-7">
          <div className="heignt-creator">
            {/* array of objects */}

            {array1.map((data) => {
              return (
                <div className="con-chart">
                  <div className="bar-chart" style={{ height: `${data.val}%` }}>
                    <div>{data.val}%</div>
                    <p>{data.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
