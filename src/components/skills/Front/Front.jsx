import React from "react";
import "./Front.scss";
import { motion } from "framer-motion";

const Front = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='frontEnd'
    >
      <div className='container'>
        <h3 className='sub-heading'>Front-End Development Skills</h3>
        <div className='content'>
          <div className='html skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>HTML</h4>
                </div>
                <div className='persentage'>
                  <h5>100%</h5>
                </div>
              </div>
              <div className='bar'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='html-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-html'>
                <img src='image/html-5.png' alt='loading' />
              </div>
            </div>
          </div>

          <div className='css skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>CSS</h4>
                </div>
                <div className='persentage'>
                  <h5>100%</h5>
                </div>
              </div>
              <div className='bar'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className=' css-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-css'>
                <img src='image/css-3.png' alt='loading' />
              </div>
            </div>
          </div>
          <div className='js skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>JavaScript</h4>
                </div>
                <div className='persentage'>
                  <h5>95%</h5>
                </div>
              </div>
              <div className='bar '>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className=' js-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-js'>
                <img src='image/js.png' alt='loading' />
              </div>
            </div>
          </div>
          <div className='react skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>ReactJS</h4>
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
                  className='  react-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-react'>
                <img src='image/react.png' alt='loading' />
              </div>
            </div>
          </div>

          <div className='react skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>SASS</h4>
                </div>
                <div className='persentage'>
                  <h5>70%</h5>
                </div>
              </div>
              <div className='bar '>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='sass-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-sass'>
                <img src='image/sass.png' alt='loading' />
              </div>
            </div>
          </div>
          <div className='react skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>Tailwind</h4>
                </div>
                <div className='persentage'>
                  <h5>60%</h5>
                </div>
              </div>
              <div className='bar'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className='tailwind-bar'
                ></motion.span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='right'
            >
              <div className='logo logo-tailwind'>
                <img src='image/tailwind-css-icon.png' alt='loading' />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Front;
