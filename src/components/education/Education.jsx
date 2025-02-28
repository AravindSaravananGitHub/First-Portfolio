import React from "react";
import "./education.scss";
import { useState } from "react";
import College from "./College";
import Hsc from "./Hsc";
import Sslc from "./Sslc";

const Education = ({ menu, setMenu }) => {
  const [UG, setUG] = useState(true);
  const [HSC, setHSC] = useState(false);
  const [SSLC, setSSLC] = useState(false);

  return (
    <div className='education' id='education' onClick={() => setMenu(false)}>
      <div className='heading'>
        <h2>Education</h2>
      </div>
      <div className='nav'>
        <ul>
          <li
            onClick={() => setUG(true) & setHSC(false) & setSSLC(false)}
            className={UG ? "active" : ""}
          >
            UG
          </li>
          <li
            onClick={() => setUG(false) & setHSC(true) & setSSLC(false)}
            className={HSC ? "active" : ""}
          >
            HSC
          </li>
          <li
            onClick={() => setUG(false) & setHSC(false) & setSSLC(true)}
            className={SSLC ? "active" : ""}
          >
            SSLC
          </li>
        </ul>
      </div>
      <div className='details'>
        {UG && <College />}
        {HSC && <Hsc />}
        {SSLC && <Sslc />}
      </div>
    </div>
  );
};

export default Education;
