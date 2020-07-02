import React from "react";
import _ from "lodash";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { mediaQueries } from "../../gatsby-plugin-theme-ui";
mediaQueries;
export default function SideDrawerPanel({
  children,
  width,
  direction,
}: {
  children?: JSX.Element;
  width: string;
  direction: "left" | "right";
}) {
  return (
    <div
      sx={{
        position: "fixed",
        top: "0px",
        ...(direction === "left" && {
          left: "0px",
        }),
        ...(direction === "right" && {
          right: "0px",
        }),
        bg: "panelBackground",
        width,
        height: "100vh",
        overflow: "auto",
        zIndex: 10,
        boxShadow: "0px 16px 16px rgba(0, 0, 0, .5)",
        [mediaQueries.lg]: {
          display: "none",
        },
      }}
    >
      <div sx={{ mt: "53px" }}>{children}</div>
    </div>
  );
}
