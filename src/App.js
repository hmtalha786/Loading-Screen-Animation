import { useEffect } from "react";
import "./App.css";

const keyFramesOrange = [
  { background: "#FFA500", transform: "translateY(10px)" },
  { background: "white" },
  { background: "#FFA500", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFA500", transform: "translateY(-10px)" },
];

const keyFramesGreen = [
  { background: "#90EE90", transform: "translateY(-12px)" },
  { background: "white" },
  { background: "#90EE90", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#90EE90", transform: "translateY(12px)" },
];

const keyFramesBlue = [
  { background: "#87CEFA", transform: "translateY(15px)" },
  { background: "white" },
  { background: "#87CEFA", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#87CEFA", transform: "translateY(-15px)" },
];

const keyFramesPink = [
  { background: "#FFB6C1", transform: "translateY(-12px)" },
  { background: "white" },
  { background: "#FFB6C1", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFB6C1", transform: "translateY(12px)" },
];

const keyFramesYellow = [
  { background: "#FFFF00", transform: "translateY(10px)" },
  { background: "white" },
  { background: "#FFFF00", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFFF00", transform: "translateY(-10px)" },
];

const keyProps = {
  duration: 1000,
  iterations: Infinity,
  direction: "alternate",
};

function App() {
  useEffect(() => {

    const shapeOrange = document.querySelector(".orange");
    const shapeGreen = document.querySelector(".green");
    const shapeBlue = document.querySelector(".blue");
    const shapePink = document.querySelector(".pink");
    const shapeYellow = document.querySelector(".yellow");

    function animation() {
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
      <div class="container">
        <div class="center orange"></div>
        <div class="center green"></div>
        <div class="center blue"></div>
        <div class="center pink"></div>
        <div class="center yellow"></div>
      </div>
    </>
  );
}

export default App;
