import "./App.css";

function App() {
  return (
    <>
      <main className="mx-[8vw] my-[3vh] marginforPhone overflow-hidden">
        <nav className=" flex items-end justify-between gap-2 my-2">
          <div className="text-white  name-bounce ">
            <h1 className="text-xl  flex gap-1 items-end ">
              <span className="text-red-700 text-3xl">A</span>
              <span className="">b</span>
              <span className="">h</span>
              <span className="">i</span>
              <span className="">n</span>
              <span className="">a</span>
              <span className="">v.</span>
            </h1>
          </div>
          <div className="flex justify-evenly items-end w-[40vw] navbarWidth fromright">
            <h1 className=" text-white text-sm  ">
              <a href="#home">Home </a>
            </h1>
            <h1 className="text-white text-sm font-extrabold ">About </h1>
            <h1 className="text-white text-sm font-extrabold">Service</h1>
            <h1 className="text-white text-sm font-extrabold ">Projects</h1>
            <h1 className="text-white text-sm font-extrabold ">contact</h1>
          </div>
        </nav>
        <section id="home " className="w-full h-[80vh]">
      <div className="bg-img h-[25em] flex justify-end">
        <h1 className="text-red-700">hello</h1>
      </div>
        </section>
      </main>
    </>
  );
}

export default App;
