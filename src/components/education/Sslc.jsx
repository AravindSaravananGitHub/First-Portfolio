import React from "react";
import "./Sslc.scss";
import { delay, motion } from "framer-motion";

const Sslc = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='college'
    >
      <div className='container'>
        <div className='left'>
          <div className='heading'>
            <div className='clg-name'>
              <h3>Baby High School</h3>
              <h4>
                10
                <span>
                  <h5>th</h5>
                </span>{" "}
                State Board
              </h4>
            </div>
            <div className='mark'>
              <h2>83%</h2>
            </div>
          </div>
          <div className='main'>
            <p>
              "From 1st to 10th grade, I flourished at Baby High School,
              achieving the remarkable feat of clinching the top position in the
              10th standard with an impressive 83%. This accomplishment
              signifies not only my academic dedication but also underscores my
              drive to excel, setting the stage for a future filled with endless
              possibilities."
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='right'
        >
          <img src='./image/SSLC.jpg' alt='' />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sslc;
