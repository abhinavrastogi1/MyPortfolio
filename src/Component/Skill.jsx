import mongoDb from "../assets/Skills/MongoDB.svg";
import react from "../assets/Skills/React.svg";
import express from "../assets/Skills/Express.svg";
import node from "../assets/Skills/Node.js.svg";
import gitHub from "../assets/Skills/GitHub.svg";
import python from "../assets/Skills/Python.svg";
import Cpp from "../assets/Skills/C++.svg";
import Tailwind from "../assets/Skills/Tailwind CSS.svg";
import Threejs from "../assets/Skills/Three.js.svg";
import postman from "../assets/Skills/Postman.svg";

export function Skills() {
  return (
    <>
      <div className="w-full flex flex-row  gap-5 px-5 py-4 
      sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-20 lg:py-4 justify-center flex-wrap  ">
        <img src={mongoDb} alt="mongoDb img " className="h-16 w-16" />
        <img src={react} alt="react img" className="h-16 w-16" />
        <img src={express} alt="express img" className="h-16 w-16" />
        <img src={node} alt="node img" className="h-16 w-16" />
        <img src={gitHub} alt="gitHub img" className="h-16 w-16" />
        <img src={python} alt="python img" className="h-16 w-16" />
        <img src={Cpp} alt="Cpp img" className="h-16 w-16" />
        <img src={Tailwind} alt="Tailwind img" className="h-16 w-16" />
        <img src={Threejs} alt="Threejs img" className="h-16 w-16" />
        <img src={postman} alt="postman img" className="h-16 w-16" />
      </div>
    </>
  );
}
