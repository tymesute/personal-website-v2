import NavBar from "./pages/navbar";
import Content from "./Pages/Content";
import Spotify from "./pages/spotify";
import Projects from "./pages/projects";
import Contacts from "./Pages/Contacts";
import Footer from "./pages/footer";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Content />
      <hr className="hr" />
      <Projects />
      <Spotify />
      <hr className="hr" />
      <Contacts />
      <hr className="hr" style={{ marginTop: "16px", marginBottom: "10px" }} />
      <Footer />
    </>
  );
}

export default App;
