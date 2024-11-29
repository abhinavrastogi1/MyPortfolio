import Home from "./Component/Home";
import { Background } from "./Component/Background";
import "./App.css";
import { Header } from "./Component/Header";
import { About } from "./Component/About";
import { useRef } from "react";
import { Footer } from "./Component/Footer";
import { Contact } from "./Component/Contact";
import { Projects } from "./Component/Projects";
function App() {
  const aboutRef = useRef(null);
  return (
    <>
      <div className="flex overflow-hidden  flex-col relative ">
        <Header />
        <Background />
        <Home aboutRef={aboutRef} />
        <About ref={aboutRef} />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
