import React, { useState } from "react";
import Nabvar from "./Components/Navbar/Nabvar";
import Hero from "./Components/Hero/Hero";
import Benefits from "./Components/Benefits/Benefits";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Nabvar />
      <Hero />
      <div className="container">
        <Title title={"BENEFITS"} />
        <Benefits />
        <About setPlayState={setPlayState} />
        <Title title={"CONTACT US"} />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
