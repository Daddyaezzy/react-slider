import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

function App() {
  return (
    <div className="App">
      <ImageSlider sliders={SliderData} />
    </div>
  );
}

export default App;
