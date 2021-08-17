import React from "react";
import "./Maintenance.css";
// import duration from '../media/duration-white.png';
// import price from '../media/price-red.png';
// import clock from '../media/clock.svg';
// import location from '../media/online2.svg';
import title from "../media/star-white.svg";

const HEADLINE_NAME = "Revenim in curand!";
const HEADLINE_TYPE = "Lucram la imbunatatirea cursurilor";
const HEADLINE_DETAILS = "";
const SUBTITLE = [
  "contact@codensoftwareacademy.com",
  "(+40) 775 238 558",
  "Contactati-ne pentru mai multe detalii",
];

function Maintenance() {
  return (
    <div className="maintenance">
      <div className="aux"></div>
      <h1>
        {HEADLINE_NAME}
        <br />
        {HEADLINE_TYPE}
      </h1>
      <div className="details">
        {/* <span className="head-span"><img src={duration} />&nbsp; 12 saptamani</span>
            <span className="head-span"><img src={clock} />&nbsp; 108 ore</span>
            <span className="head-span"><img src={location} />&nbsp; Online</span> */}
        <span className="head-span">
          {/* <img src={title} alt="title" /> */}
          &nbsp; {HEADLINE_DETAILS}
        </span>
      </div>
      <div className="subtitle">
        <div className="aux-subtitle">
          <p>{SUBTITLE[2]}</p>
          <table>
            <tr>
              <td>E-mail:</td>
              <td>&nbsp;&nbsp;{SUBTITLE[0]}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>&nbsp;&nbsp;{SUBTITLE[1]}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
