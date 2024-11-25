import { useEffect, useRef } from "react";
import Stars from "../assets/1Stars.svg";
import Planets from "../assets/2Planets.svg";
import Moutains from "../assets/3Mountain.svg";
import BottomMountains from "../assets/4Mountain.svg";
import Crater from "../assets/5Crater.svg";
import Sun from "../assets/6Sun.svg";

export function Background() {
  const Craterref = useRef();
  const Planetsref = useRef();
  const BottomMountainsref = useRef();
  const Starsref = useRef();
  useEffect(() => {
    function onScroll() {
      Craterref.current.style.transform = `translateY(-${
        window.scrollY * 0.22
      }px)`;
      Starsref.current.style.transform = `translateY(-${
        window.scrollY * 0.2
      }px)`;
      Planetsref.current.style.transform = `translateY(${
        window.scrollY * 0.2
      }px)`;
      BottomMountainsref.current.style.transform = `translateY(-${
        window.scrollY * 0.2
      }px)`;
    }

    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {" "}
      <img src={Stars} ref={Starsref} className=" absolute stars " />
      <img src={Planets} ref={Planetsref} className="absolute Planets" />
      <img src={Moutains} className="absolute Moutains " />
      <img
        src={BottomMountains}
        ref={BottomMountainsref}
        className="absolute  BottomMountains"
      />
      <img src={Crater} ref={Craterref} className=" absolute  Crater " />
      <img src={Sun} className=" absolute Sun" />
    </>
  );
}
