import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./Pages/NavBar";
import Content from "./Pages/Content";
import Spotify from "./Pages/Spotify";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Content />
      <hr className="hr" />
      <Projects />
      <hr className="hr" />
      <Spotify />
      <hr className="hr" />
    </>
  );
}

export default App;
