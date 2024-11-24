import { useEffect } from "react";
import Stars from "../assets/1Stars.svg";
import Planets from "../assets/2Planets.svg";
import Moutains from "../assets/3Mountain.svg";
import BottomMountains from "../assets/4Mountain.svg";
import Crater from "../assets/5Crater.svg";
import Sun from "../assets/6Sun.svg";

export function Background() {
  useEffect(() => {
    function onScroll() {
    const  Crater= document.getElementsByClassName("Crater")
    Crater[0].style.transform=`translateY(-${window.scrollY*0.22}px)`
    }
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {" "}
      <img src={Stars} className=" absolute  w-full stars" />
      <img src={Planets} className="absolute Planets" />
      <img src={Moutains} className="absolute Moutains " />
      <img src={BottomMountains} className="absolute  BottomMountains" />
      <img src={Crater} className=" absolute  Crater" />
      <img src={Sun} className=" absolute Sun" />
    </>
  );
}
