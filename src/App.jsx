import ThreeDimensionalSection from "./Component/3dSection";
import { Background } from "./Component/Background";
import "./App.css";
import { Header } from "./Component/Header";
function App() {
  return (
    <>
     <div className="flex overflow-hidden relative">
    <Header />
    <Background />
    <ThreeDimensionalSection />
      
     </div>
    </>
  );
}

export default App;
