import React from "react";

import htmlCss from "../Images/htmlCss.png";
import ResponsiveCert from "../Images/ResponsiveCert.png";
import WebdevCert from "../Images/WebdevCert.png";
import ReactCert from "../Images/ReactCert.png";

function Certificates() {
  return (
    <div>
      <h1>Certificates</h1>
      <div>
        <div>
          <img src={htmlCss} alt="HTML & CSS  Certificate" />
          <img src={ResponsiveCert} alt="Responsiveness Certificate" />
        </div>
        <div>
          <img src={WebdevCert} alt="Web developmemt Certificate" />
          <img src={ReactCert} alt="React Certificate" />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
