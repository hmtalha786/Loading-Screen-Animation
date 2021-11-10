import { useEffect } from "react";
import "./App.css";

const keyFramesOrange = [
  { background: "#FFA500", transform: "translateY(5px)" },
  { background: "white" },
  { background: "#FFA500", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFA500", transform: "translateY(-5px)" },
];

const keyFramesGreen = [
  { background: "#90EE90", transform: "translateY(-6px)" },
  { background: "white" },
  { background: "#90EE90", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#90EE90", transform: "translateY(6px)" },
];

const keyFramesBlue = [
  { background: "#87CEFA", transform: "translateY(8px)" },
  { background: "white" },
  { background: "#87CEFA", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#87CEFA", transform: "translateY(-8px)" },
];

const keyFramesPink = [
  { background: "#FFB6C1", transform: "translateY(-6px)" },
  { background: "white" },
  { background: "#FFB6C1", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFB6C1", transform: "translateY(6px)" },
];

const keyFramesYellow = [
  { background: "#FFFF00", transform: "translateY(5px)" },
  { background: "white" },
  { background: "#FFFF00", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFFF00", transform: "translateY(-5px)" },
];

const keyProps = {
  duration: 800,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out",
};

var RingFrames = [
  { transform: "rotate(0deg)" },
  { transform: "rotate(360deg)" },
];
var RingProps = {
  duration: 2000,
  iterations: Infinity,
  easing: "ease",
};

function App() {
  useEffect(() => {
    const shapeRing = document.querySelector(".circle");
    const shapeOrange = document.querySelector(".orange");
    const shapeGreen = document.querySelector(".green");
    const shapeBlue = document.querySelector(".blue");
    const shapePink = document.querySelector(".pink");
    const shapeYellow = document.querySelector(".yellow");

    function animation() {
      shapeRing.animate(RingFrames, RingProps);
      shapeOrange.animate(keyFramesOrange, keyProps);
      shapeGreen.animate(keyFramesGreen, keyProps);
      shapeBlue.animate(keyFramesBlue, keyProps);
      shapePink.animate(keyFramesPink, keyProps);
      shapeYellow.animate(keyFramesYellow, keyProps);
    }

    return animation();
  }, []);

  return (
    <>
      <div className="container">
        <div className="circle"></div>
        <div className="center orange"></div>
        <div className="center green"></div>
        <div className="center blue"></div>
        <div className="center pink"></div>
        <div className="center yellow"></div>
      </div>
    </>
  );
}

export default App;
