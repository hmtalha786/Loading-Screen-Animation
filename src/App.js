import { useEffect } from "react";
import "./App.css";

var keyFramesOrange = [
  { background: "#FFA500", transform: "translateY(10px)" },
  { background: "white" },
  { background: "#FFA500", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFA500", transform: "translateY(-10px)" },
];

var keyFramesGreen = [
  { background: "#90EE90", transform: "translateY(-12px)" },
  { background: "white" },
  { background: "#90EE90", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#90EE90", transform: "translateY(12px)" },
];

var keyFramesBlue = [
  { background: "#87CEFA", transform: "translateY(15px)" },
  { background: "white" },
  { background: "#87CEFA", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#87CEFA", transform: "translateY(-15px)" },
];

var keyFramesPink = [
  { background: "#FFB6C1", transform: "translateY(-12px)" },
  { background: "white" },
  { background: "#FFB6C1", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFB6C1", transform: "translateY(12px)" },
];

var keyFramesYellow = [
  { background: "#FFFF00", transform: "translateY(10px)" },
  { background: "white" },
  { background: "#FFFF00", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFFF00", transform: "translateY(-10px)" },
];

var keyProps = {
  duration: 1000,
  iterations: Infinity,
  direction: "alternate",
};

function App() {
  useEffect(() => {

    var shapeOrange = document.querySelector(".orange");
    var shapeGreen = document.querySelector(".green");
    var shapeBlue = document.querySelector(".blue");
    var shapePink = document.querySelector(".pink");
    var shapeYellow = document.querySelector(".yellow");

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
