import { Html, useProgress } from "@react-three/drei";

export function Loading() {
  const { progress } = useProgress();
  return (
    <>
      <Html>
        <div className=" LoadingScreen   flex relative ">
          <div
            className="w-16 h-16 absolute
           border-t-2  rounded-full border-white animate-spin"
          >
            {" "}
          </div>
          <h2 className="text-white font-semibold text-lg w-16 h-16 flex justify-center items-center">
            {" "}
            {progress.toFixed(2)}%
          </h2>
        </div>
      </Html>
    </>
  );
}
