import React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { mediaQueries } from "../../gatsby-plugin-theme-ui";

interface SideDrawerOverlayProps {
  toggleOpen: () => void;
  direction: "left" | "right";
  width: string;
}

export default function SideDrawerOverlay({
  toggleOpen,
  direction,
  width,
}: SideDrawerOverlayProps) {
  return (
    <div
      sx={{
        position: "fixed",
        top: "0px",
        ...(direction === "left" && {
          left: width,
        }),
        ...(direction === "right" && {
          right: width,
        }),
        height: `100vh`,
        width: `calc(100vw - ${width})`,
      }}
    >
      <div
        onClick={toggleOpen}
        sx={{
          width: "100%",
          height: "100%",
          color: "rgba(0, 0, 0, .25)",
          bg: "rgba(0, 0, 0, .5)",
          zIndex: 10,
          [mediaQueries.lg]: {
            display: "none",
          },
        }}
      ></div>
    </div>
  );
}
