import React from "react";
import { useColorMode, css } from "theme-ui";
import sun from "../../images/sun.svg";
import night from "../../images/brightness_2-white-18dp.svg";

/** @jsx jsx */
import { jsx } from "theme-ui";

export default function ToggleMode() {
  const [colorMode, setColorMode] = useColorMode("dark" as string);
  const toggleColorMode = (e: any) => {
    setColorMode(colorMode === "default" ? `light` : `default`);
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
        p: 2,
        mx: 2,
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "muted",
        },
      }}
      title="Toggle Dark Mode"
    >
      {" "}
      {colorMode === "default" ? <div>{nigthMode}</div> : <div>{dayMode}</div>}
    </button>
  );
}
