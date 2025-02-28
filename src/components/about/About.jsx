import React from "react";
import "./about.scss";
import { FaInstagram, FaTwitter, FaSnapchatGhost } from "react-icons/fa";

const About = ({ menu, setMenu }) => {
  return (
    <div className='about' id='about' onClick={() => setMenu(false)}>
      <div className='title'>
        <h2>
          About <span>Me</span>
        </h2>
      </div>
      <div className='content-container'>
        <div className='left'>
          <h2>
            Welcome to My <span>World</span>
          </h2>
          <p>
            I'm Aravind S, a passionate B.Sc. Mathematics graduate from SRM Arts
            and Science College. My academic journey includes a Proficiency
            Award second prize, reflecting my dedication to excellence. My heart
            belongs to numbers, yet my true passion thrives in web development.
            Amid mathematical theorems, I was drawn to HTML, CSS, Sass,
            JavaScript, ReactJS, Node.js, Express.js, MongoDB, Java, and MySQL.
            I've crafted 20+ projects in just 8 months, showcasing my
            versatility as a MERN Stack Developer. Each line of code I write
            reflects boundless curiosity and a thirst for innovation. Web
            development isn't just a skill—it's my addiction, where challenges
            fuel growth and every project is a canvas. Join me in celebrating
            the fusion of logic and creativity in my portfolio—a reflection of
            my journey from math to web development excellence.
          </p>
          <div className='find'>
            <h2>Find Me In</h2>
            <div className='insta'>
              <a
                href='https://instagram.com/_p.r.i.m.e.__?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D'
                target='blank'
              >
                <FaInstagram />
              </a>
            </div>
            <div className='twitter'>
              <a
                href='https://twitter.com/ARAVIND04130772?t=pVjRwsgJW82HR-XeTS5cyA&s=08'
                target='blank'
              >
                <FaTwitter />
              </a>
            </div>
            <div className='snap'>
              <a
                href='https://www.snapchat.com/add/aravind_prime?share_id=BAyghjQF92U&locale=en-US'
                target='blank'
              >
                <FaSnapchatGhost />
              </a>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='shadow'>
            <div className='container'>
              <img src='image/about.jpg' alt='Loading..' />
              <div className='details'>
                <h3>Aravind S</h3>
                <h4>Web Developer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
