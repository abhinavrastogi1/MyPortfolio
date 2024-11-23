import { Html } from "@react-three/drei";
export function LoadingScreen() {
  return (
    <>
      <Html>
        <div className="h-[100vh]  w-full bg-black ">
          <h1 className="text-white font-bold text-3xl h-full flex justify-center items-center">
            Loading..
          </h1>
        </div>
      </Html>
    </>
  );
}
