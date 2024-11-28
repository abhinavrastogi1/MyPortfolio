import React from "react";

export const About = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className="w-full  h-[1000vh]  relative z-50 text-white  text-9xl "
        ref={ref}
      >
        Hello
      </div>
    </>
  );
});
