import ThreeDimensionalSection from "./Component/3dSection";
import { Background } from "./Component/Background";
import "./App.css";
import { Header } from "./Component/Header";
import { PortfolioSection } from "./Component/PortfolioSection";
function App() {
  return (
    <>
      <div className="flex overflow-hidden  flex-col relative ">
        <Header />
        <Background />
        <ThreeDimensionalSection />
        <PortfolioSection />
      </div>
    </>
  );
}

export default App;
