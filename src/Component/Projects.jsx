import bigBasketImg from "../assets/Projects/GroceryProject.png";
export function Projects() {
  return (
    <>
      <div className=" w-full text-center px-5 py-4 sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-20 lg:py-4">
        <div>
          <h1 className="text-white  text-7xl my-11 font-bold "> Projects</h1>
        </div>{" "}
        <img src={bigBasketImg} />
      </div>
    </>
  );
}
