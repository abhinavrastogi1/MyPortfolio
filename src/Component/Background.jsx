import { useEffect, useRef } from "react";
import Stars from "../assets/1Stars.svg";
import Planets from "../assets/2Planets.svg";
import Moutains from "../assets/3Mountain.svg";
import BottomMountains from "../assets/4Mountain.svg";
import Crater from "../assets/5Crater.svg";
import Sun from "../assets/6Sun.svg";

export function Background() {
  const Planetsref = useRef();
  const BottomMountainsref = useRef();
  const Starsref = useRef();
  const Moutainsref = useRef();
  // to create parrallex efffect in the bg
  useEffect(() => {
    function onScroll() {
      if (Starsref.current) {
        Starsref.current.style.transform = `translateY(-${
          window.scrollY * 0.1
        }px)`;
      }
      if (Planetsref.current) {
        Planetsref.current.style.transform = `translateY(${
          window.scrollY * 0.2
        }px)`;
      }
      if (BottomMountainsref.current) {
        BottomMountainsref.current.style.transform = `translateY(${
          window.scrollY * 0.15
        }px)`;
      }
      if (Moutainsref.current) {
        Moutainsref.current.style.transform = `translateY(${
          window.scrollY * 0.25
        }px)`;
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {" "}
      <div className="w-[1400px] sm:w-[2500px] xl:w-full   relative ">
        {" "}
        <img src={Stars} ref={Starsref} className=" absolute stars w-full " />
        <img src={Planets} ref={Planetsref} className="absolute Planets" />
        <img src={Moutains} ref={Moutainsref} className="absolute Moutains  " />
        <img
          src={BottomMountains}
          ref={BottomMountainsref}
          className="absolute  BottomMountains"
        />
        <img src={Crater} className=" absolute  Crater " />
        <img src={Sun} className=" absolute Sun" />
      </div>
    </>
  );
}
