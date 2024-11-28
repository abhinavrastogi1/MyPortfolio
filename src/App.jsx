import Home from "./Component/Home";
import { Background } from "./Component/Background";
import "./App.css";
import { Header } from "./Component/Header";
import { About } from "./Component/About";
import { useRef } from "react";
function App() {
  const aboutRef = useRef(null);
  return (
    <>
      <div className="flex overflow-hidden  flex-col relative ">
        <Header />
        <Background />
        <Home aboutRef={aboutRef} />
        <About ref={aboutRef} />
      </div>
    </>
  );
}

export default App;
