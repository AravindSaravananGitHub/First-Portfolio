import { useEffect, useRef } from "react";
import "./home.scss";
import { init } from "ityped";
import { FaAngleDown, FaFileDownload } from "react-icons/fa";
import alterImage from "../../image/new.png";

const Home = ({ menu, setMenu }) => {
  const resumePath = "image/Aravind-S-DreamJob.pdf";
  const textRef = useRef();
  const isTypedInitialized = useRef(false);

  useEffect(() => {
    if (!isTypedInitialized.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: [
          "Front-end Developer",
          "MERN Stack Developer",
          "Web Developer",
          "ReactJS Developer",
        ],
      });
      isTypedInitialized.current = true;
    }
  }, []);

  return (
    <div className='home' id='home' onClick={() => setMenu(false)}>
      <div className='left'>
        <div className='imageContainer'>
          <img src={alterImage} alt='Loading' />
        </div>
      </div>
      <div className='right'>
        <div className='textContainer'>
          <div className='textContent'>
            <h3>Hai There, Myself</h3>
            <h1>
              <span className='name'>Aravind</span> S
            </h1>
            <h2 className='iam'>
              I'm a <span ref={textRef}></span>
            </h2>
          </div>
          <div className='downloadBtn'>
            <a href={process.env.PUBLIC_URL + resumePath} download>
              <button>
                <span>
                  <FaFileDownload />
                </span>
                Resume
              </button>
            </a>
          </div>
        </div>

        <div className='arrow'>
          <a href='#about'>
            <FaAngleDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
