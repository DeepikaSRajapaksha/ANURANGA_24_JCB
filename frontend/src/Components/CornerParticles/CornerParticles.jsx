import { useMemo } from "react";
import Particles from "@tsparticles/react";
import "./CornerParticles.css";

function CornerParticles() {

  const options = useMemo(() => ({
    fpsLimit: 60,

    fullScreen: {
      enable: false,
    },

    particles: {

      number: {
        value: 30,
      },

      color: {
        value: "#FFD100",
      },

      shape: {
        type: "circle",
      },

      opacity: {
        value: 0.1,
      },

      size: {
        value: {
          min: 2,
          max: 5,
        },
      },

      links: {
        enable: true,
        distance: 100,
        color: "#FFD100",
        opacity: 0.5,
        width: 1,
      },

      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        outModes: {
          default: "bounce",
        },
      },

    },

    interactivity: {

      detectsOn: "window",

      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },

      modes: {
        repulse: {
          distance: 120,
          duration: 0.4,
        },
      },

    },

    detectRetina: true,

  }), []);


  return (
    <div className="corner-particles">

      {/* BOTTOM RIGHT */}
      <div className="particle-corner bottom-right">
        <Particles
          id="bottom-right-particles"
          options={options}
        />
      </div>


      {/* BOTTOM LEFT */}
      <div className="particle-corner bottom-left">
        <Particles
          id="bottom-left-particles"
          options={options}
        />
      </div>

    </div>
  );
}

export default CornerParticles;