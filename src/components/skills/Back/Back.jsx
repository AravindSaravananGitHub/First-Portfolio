import React from "react";
import "./back.scss";
import { motion } from "framer-motion";

const Back = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='frontEnd'
    >
      <div className='container'>
        <h3 className='sub-heading'>Back-End Development Skills</h3>
        <div className='content'>
          <div className='html skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>Node.Js</h4>
                </div>
                <div className='persentage'>
                  <h5>70%</h5>
                </div>
              </div>
              <div className='bar'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='node-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-html'>
                <img src='image/nodejs.png' alt='loading' />
              </div>
            </div>
          </div>

          <div className='css skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>Express.Js</h4>
                </div>
                <div className='persentage'>
                  <h5>80%</h5>
                </div>
              </div>
              <div className='bar'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='ex-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-ex'>
                <img src='image/ex.png' alt='loading' />
              </div>
            </div>
          </div>
          <div className='js skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>Java</h4>
                </div>
                <div className='persentage'>
                  <h5>80%</h5>
                </div>
              </div>
              <div className='bar '>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='java-bar'
                ></motion.span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='right'
            >
              <div className='logo logo-js'>
                <img src='image/java.png' alt='loading' />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Back;
