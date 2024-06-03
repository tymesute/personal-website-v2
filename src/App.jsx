import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./Home/NavBar";
import Content from "./Home/Content";
import Spotify from "./Home/Spotify";

function App() {
  return (
    <>
      <NavBar />
      <Content />
      <Spotify />
    </>
  );
}

export default App;
