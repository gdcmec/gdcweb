import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-100 flex-col px-5  ">
      <Navbar/>
      <Landing />
      <About/>
    </div>
  );
}

export default App;
