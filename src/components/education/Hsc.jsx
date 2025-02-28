import React from "react";
import "./Hsc.scss";
import { delay, motion } from "framer-motion";

const Hsc = () => {
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
              <h3>JGN Higher Sec School</h3>
              <h4>
                12
                <span>
                  <h5>th </h5>
                </span>{" "}
                Computer Science
              </h4>
            </div>
            <div className='mark'>
              <h2>65%</h2>
            </div>
          </div>
          <div className='main'>
            <p>
              "Graduating from Jaigopal Garodia National Higher Secondary
              School, Tambaram, I achieved a remarkable 65.16%, a testament to
              both my academic commitment and the enriching experiences the
              school offered. These formative years have shaped me profoundly,
              equipping me with the drive and dedication to excel in new
              endeavors."
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='right'
        >
          <img src='./image/HSC.jpg' alt='' />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hsc;
