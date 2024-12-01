import Home from "./Component/Home";
import { Background } from "./Component/Background";
import "./App.css";
import { Header } from "./Component/Header";
import { About } from "./Component/About";
import { useEffect, useRef, useState } from "react";
import { Footer } from "./Component/Footer";
import { Contact } from "./Component/Contact";
import { Projects } from "./Component/Projects";
import { Skills } from "./Component/Skill";
function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [currentActive, setCurrentActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentActive(entry?.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );
    const sections = [
      aboutRef.current,
      homeRef.current,
      projectsRef.current,
      contactRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className="flex overflow-hidden  flex-col relative ">
        <Header
          aboutRef={aboutRef}
          homeRef={homeRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          currentActive={currentActive}
        />
        <Background />
        <Home ref={homeRef} id="home" />
        <About ref={aboutRef} id="about" />
        <Skills />
        <Projects ref={projectsRef} id="projects" />
        <Contact ref={contactRef} id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
