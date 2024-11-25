import ThreeDimensionalSection from "./Component/3dSection";
import { Background } from "./Component/Background";
import "./App.css";
import { Header } from "./Component/Header";
function App() {
  return (
    <>
      <Header />
      <Background />
      <ThreeDimensionalSection />
    </>
  );
}

export default App;
