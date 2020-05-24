import React from "react";
import { useColorMode, css } from "theme-ui";
import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";
import night from "../../images/brightness_2-white-18dp.svg";

/** @jsx jsx */
import { jsx } from "theme-ui";

function ToggleMode() {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e) => {
    setColorMode(isDark ? `light` : `dark`);
  };

  const nigthMode = (
    <img
      alt="moon indicating dark mode"
      src={night}
      width="20"
      height="20"
      role="presentation"
      style={{
        pointerEvents: `none`,
        margin: 4,
      }}
    />
  );

  const dayMode = (
    <img
      alt="sun indicating light mode"
      src={sun}
      width="20"
      height="20"
      role="presentation"
      style={{
        pointerEvents: `none`,
        margin: 4,
      }}
    />
  );

  return (
    <button
      onClick={toggleColorMode}
      sx={{
        bg: "panelBackground",
        cursor: `pointer`,
        border: `none`,
        outline: `none`,
        pr: "1rem",
        py: 0,
      }}
      title="Toggle Dark Mode"
    >
      {" "}
      {isDark ? <div>{nigthMode}</div> : <div>{dayMode}</div>}
    </button>
  );
}

export default ToggleMode;
