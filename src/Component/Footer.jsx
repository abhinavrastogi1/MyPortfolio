import instagram from "../assets/SocialMedia/instagram.svg";
import linkedin from "../assets/SocialMedia/LinkedIn.svg";
import facebook from "../assets/SocialMedia/Facebook.svg";

export function Footer() {
  return (
    <>
      <div className="bg-[#000814] w-full    px-5  py-1 sm:px-10  md:px-16  lg:px-36 xl:px-40 2xl:px-48  flex justify-center gap-4  flex-wrap ">
        <p className="text-white text-xs sm:text-sm  md:text-base lg:text-lg">
          &#169; 2024 Abhinav Rastogi. All Rights Reserved.
        </p>
        <div className=" flex gap-x-3">
          <a
            href="https://www.instagram.com/abh.inav_ras.togi/"
            target="_blank"
          >
            {" "}
            <img
              alt="instagram  link"
              src={instagram}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinavrastogi986"
            target="_blank"
          >
            {" "}
            <img
              alt="linkedin link"
              src={linkedin}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            />
          </a>
         
        </div>
      </div>
    </>
  );
}
