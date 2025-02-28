import React from "react";
import "./topbar.scss";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillEnvelopeAtFill, BsGithub } from "react-icons/bs";

const Topbar = ({ menu, setMenu }) => {
  return (
    <div className={"topbar " + (menu && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <div className='logo'>
            <a href='#home'>
              <h2>Aravind S</h2>
            </a>
          </div>

          <div className='mobile'>
            <FaWhatsapp className='icon' />
            <span>
              <a href='tel:+919962989886'>+91 99629 89886</a>
            </span>
          </div>

          <div className='email'>
            <BsFillEnvelopeAtFill className='icon' />
            <span>
              <a href='mailto:aravindprime123@gmail.com'>
                aravindprime123@gmail.com
              </a>
            </span>
          </div>

          <div className='github'>
            <BsGithub className='icon' />
            <span>
              <a
                href='https://github.com/AravindSaravananGitHub'
                target='blank'
              >
                AravindSaravananGitHub
              </a>
            </span>
          </div>
        </div>

        <div className='right'>
          <div className='burger' onClick={() => setMenu(!menu)}>
            <span className='line1'></span>
            <span className='lin2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
