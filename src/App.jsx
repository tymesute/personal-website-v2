import NavBar from "./Pages/NavBar";
import Content from "./Pages/Content";
import Spotify from "./Pages/Spotify";
import Projects from "./pages/projects";
import Contacts from "./Pages/Contacts";
import Footer from "./Pages/Footer";
import Guitar from "./Pages/Guitar";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Content />
      <hr className="hr" />
      <Projects />
      <Spotify />
      <Guitar />
      <hr className="hr" />
      <Contacts />
      <hr className="hr" style={{ marginTop: "16px", marginBottom: "10px" }} />
      <Footer />
    </>
  );
}

export default App;
