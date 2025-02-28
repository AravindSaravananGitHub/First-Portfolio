import React from "react";
import "./DataBase.scss";
import { motion } from "framer-motion";

const DataBase = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className='dataBase'
    >
      <div className='container'>
        <h3 className='sub-heading'>Data Base</h3>
        <div className='content'>
          <div className='html skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>MongoDB</h4>
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
                  className='mongoDB-bar'
                ></motion.span>
              </div>
            </div>
            <div className='right'>
              <div className='logo logo-html'>
                <img src='image/mongodb.png' alt='loading' />
              </div>
            </div>
          </div>

          <div className='css skill-box'>
            <div className='left'>
              <div className='control'>
                <div className='h4'>
                  <h4>MySQL</h4>
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
                  className='MYSQL-bar'
                ></motion.span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='right'
            >
              <div className='logo mysql'>
                <img src='image/mysql.png' alt='loading' />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DataBase;
