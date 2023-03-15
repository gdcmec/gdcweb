import { useState , useEffect , useRef } from "react";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Scrollbanner from "./components/Scrollbanner/Scrollbanner";

function App() {

	return (
		<div >
			<Navbar />
			<Scrollbanner/>
			<Landing />
			{/* <Scrollbanner ref={secondComponentRef} isFixed={isFixed}/> */}
			<Events />
			<div className="h-[100vh]"></div>
		</div>
	);
}

export default App;
