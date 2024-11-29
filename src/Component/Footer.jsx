import instagram from "../assets/instagram.svg";
import linkedin from "../assets/LinkedIn.svg";
import facebook from "../assets/Facebook.svg";

export function Footer() {
  return (
    <>
      <div className="bg-[#000814] w-full    px-5  py-2 sm:px-10  md:px-16  lg:px-48  flex justify-between ">
        <p className="text-white text-xs sm:text-sm  md:text-base lg:text-lg">
          &#169; 2024 Abhinav Rastogi. All Rights Reserved.
        </p>
        <div className=" flex gap-2">
          <a
            href="https://www.instagram.com/abh.inav_ras.togi/"
            target="_blank"
          >
            {" "}
            <img
              alt="instagram  link"
              src={instagram}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinav-rastogi-a664612a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            {" "}
            <img
              alt="linkedin link"
              src={linkedin}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            />
          </a>
          <a href="/">
            {" "}
            <img
              alt=" facebook link"
              src={facebook}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            />
          </a>
        </div>
      </div>
    </>
  );
}
