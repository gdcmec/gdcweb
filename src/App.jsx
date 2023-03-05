import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Landing from "./components/Landing/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-100 flex-col px-5  ">
      <Landing />
    </div>
  );
}

export default App;
