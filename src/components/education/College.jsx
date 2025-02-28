import React from "react";
import "./college.scss";
import { motion } from "framer-motion";

const College = () => {
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
              <h3>SRM Arts and Science College</h3>
              <h4>B.sc Mathematics</h4>
            </div>
            <div className='mark'>
              <h2>85%</h2>
            </div>
          </div>
          <div className='main'>
            <p className='clg-para'>
              "Graduating from SRM Arts and Science College with an impressive
              CGPA of 73%, I proudly clinched the Proficiency Second Prize Award
              in my third year—a testament to my commitment to excellence. SRM's
              enriching environment not only shaped my education but also
              bestowed me with cherished memories that continue to propel my
              journey."
            </p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='right'
        >
          <img src='./image/college.webp' alt='' />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default College;
