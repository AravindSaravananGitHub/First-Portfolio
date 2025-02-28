import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import "./app.scss";
import Section from "./Section";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className='App'>
      <Topbar menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
      <div className='section'>
        <Section menu={menu} setMenu={setMenu} />
      </div>
    </div>
  );
}

export default App;
