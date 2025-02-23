import React from "react";
import "../styles.css";

import htmlCss from "../Images/htmlCss.png";
import ResponsiveCert from "../Images/ResponsiveCert.png";
import WebdevCert from "../Images/WebdevCert.png";
import ReactCert from "../Images/ReactCert.png";

function Certificates() {
  return (
    <div>
      <h1 className="cerfificates-tittle">Certificates</h1>
      <div className="certificates-container">
        <div className="certificates-grid">
          <img src={htmlCss} alt="HTML & CSS  Certificate" />
          <img src={ResponsiveCert} alt="Responsiveness Certificate" />

          <img src={WebdevCert} alt="Web developmemt Certificate" />
          <img src={ReactCert} alt="React Certificate" />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
