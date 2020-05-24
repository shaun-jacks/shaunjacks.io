import React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

function TopDrawerOverlay({ isOpen, toggleOpen }) {
  return (
    isOpen && (
      <div
        onClick={toggleOpen}
        sx={{
          width: "100%",
          height: "100%",
          color: "rgba(0, 0, 0, .25)",
          backgroundColor: "rgba(0, 0, 0, .5)",
          zIndex: 10,
        }}
      />
    )
  );
}

export default TopDrawerOverlay;
