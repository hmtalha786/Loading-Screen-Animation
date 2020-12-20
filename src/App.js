import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';

function App() {

  const main = useWebAnimations({
    keyframes: [
      { backgroundPosition: '0% 0%' },
      { backgroundPosition: '100% 0%' },

    ],
    timing: {
      duration: 5000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const clouds = useWebAnimations({
    keyframes: [
      { backgroundPosition: '250% 0%' },
      { backgroundPosition: '-150% 0%' },

    ],
    timing: {
      duration: 5000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const running_object = useWebAnimations({
    keyframes: [
      { backgroundPosition: '0% 0%' },
      { backgroundPosition: '0% 0%' },

    ],
    timing: {
      duration: 30000,
      iterations: Infinity,
      easing: "linear",
    }
  });

  function fastpace() {
    running_object.animate({
      keyframes: [
        { backgroundPosition: '0% 0%' },
        { backgroundPosition: '20% 0%' },
        { backgroundPosition: '40% 0%' },
        { backgroundPosition: '60% 0%' },
        { backgroundPosition: '80% 0%' },

      ],
      timing: { duration: 30500, fill: "forwards" },

    });
    clouds.getAnimation().updatePlaybackRate(clouds.getAnimation().playbackRate * 1.15);
    main.getAnimation().updatePlaybackRate(main.getAnimation().playbackRate * 1.15);
  }

  const reset = () => {
    clouds.getAnimation().playbackRate = 1;
    main.getAnimation().playbackRate = 1;
  };

  useEffect(() => {
    setInterval(() => {
      if (main.getAnimation().playbackRate > 3) {
        clouds.getAnimation().updatePlaybackRate(clouds.getAnimation().playbackRate * 0.8);
        main.getAnimation().updatePlaybackRate(main.getAnimation().playbackRate * 0.8);
      }
      else if (main.getAnimation().playbackRate > 2) {
        clouds.getAnimation().updatePlaybackRate(clouds.getAnimation().playbackRate * 1.8);
        main.getAnimation().updatePlaybackRate(main.getAnimation().playbackRate * 1.8);
      }
    }
      , 1500)

  }, [clouds, main, running_object])

  return (
    <div className="mainbody" ref={main.ref} >
      <div className="clouds" ref={clouds.ref}></div>
      <div className="cowboy" onClick={reset} ref={running_object.ref} ></div>
      <div className="lion" onClick={fastpace} ref={running_object.ref} ></div>
    </div>
  );
}

export default App;
