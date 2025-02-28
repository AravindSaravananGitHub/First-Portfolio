import React from "react";
import "./Others.scss";
import { motion } from "framer-motion";

const Others = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='Others'
    >
      <div className='container'>
        <h3 className='sub-heading'>Other Technical Skills</h3>
        <div className='content'>
          <div className='html skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>VS Code</h4>
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
                  className=' vs-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-html'>
                <img src='image/visual-studio.png' alt='loading' />
              </div>
            </div>
          </div>

          <div className='css skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>Git</h4>
                </div>
                <div className='persentage'>
                  <h5>60%</h5>
                </div>
              </div>
              <div className='bar '>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className=' git-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-css'>
                <img src='image/git.png' alt='loading' />
              </div>
            </div>
          </div>
          <div className='js skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>GitHub</h4>
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
                  className=' github-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-js'>
                <img src='image/github.png' alt='loading' />
              </div>
            </div>
          </div>
          <div className='react skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>npm</h4>
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
                  className=' npm-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-react'>
                <img src='image/npm.png' alt='loading' />
              </div>
            </div>
          </div>

          <div className='react skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>Material UI</h4>
                </div>
                <div className='persentage'>
                  <h5>90%</h5>
                </div>
              </div>
              <div className='bar'>
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className=' material-bar'
                ></motion.span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='right'
            >
              <div className='logo logo-sass'>
                <img src='image/materialUI.png' alt='loading' />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Others;
