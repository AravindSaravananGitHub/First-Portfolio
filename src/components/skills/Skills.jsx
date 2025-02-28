import React, { useState } from "react";
import "./skills.scss";
import { FaLaptopCode } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { BsDatabaseCheck } from "react-icons/bs";
import { TbWorldCode } from "react-icons/tb";
import Front from "./Front/Front";
import Back from "./Back/Back";
import DataBase from "./Dbase/DataBase";
import Others from "./Others/Others";

const Skills = ({ menu, setMenu }) => {
  const [frontEnd, setFrontEnd] = useState(true);
  const [backEnd, setBackEnd] = useState(false);
  const [dataBase, setDataBase] = useState(false);
  const [others, setOthers] = useState(false);

  return (
    <div className='skills' id='skills' onClick={() => setMenu(false)}>
      <div className='heading'>
        <h2>Skills</h2>
      </div>

      <div className='main'>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li
                onClick={() =>
                  setFrontEnd(true) &
                  setBackEnd(false) &
                  setDataBase(false) &
                  setOthers(false)
                }
                className={frontEnd ? "active" : ""}
              >
                <FaLaptopCode />
              </li>
              <li
                onClick={() =>
                  setFrontEnd(false) &
                  setBackEnd(true) &
                  setDataBase(false) &
                  setOthers(false)
                }
                className={backEnd ? "active" : ""}
              >
                <VscServerProcess />
              </li>
              <li
                onClick={() =>
                  setFrontEnd(false) &
                  setBackEnd(false) &
                  setDataBase(true) &
                  setOthers(false)
                }
                className={dataBase ? "active" : ""}
              >
                <BsDatabaseCheck />
              </li>
              <li
                onClick={() =>
                  setFrontEnd(false) &
                  setBackEnd(false) &
                  setDataBase(false) &
                  setOthers(true)
                }
                className={others ? "active" : ""}
              >
                <TbWorldCode />
              </li>
              <div className='line'></div>
            </ul>
          </div>
          <div className='content'>
            {frontEnd && <Front />}
            {backEnd && <Back />}
            {dataBase && <DataBase />}
            {others && <Others />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
