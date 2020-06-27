import React from "react";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

interface HamburgerIconProps {
  toggleOpen: () => void;
}

export default function HamburgerIcon({ toggleOpen }: HamburgerIconProps) {
  return (
    <div
      onClick={toggleOpen}
      sx={{
        width: "40px",
        height: "100%",
        m: 0,
        p: 0,
        position: "absolute",
        span: {
          position: "relative",
          display: "block",
          height: "2px",
          backgroundColor: "text",
          width: "50%",
          top: "50%",
          left: "50%",
          zIndex: "9999",
        },
        "&:hover": {
          cursor: "pointer",
          span: {
            backgroundColor: lighten("primary", 0.3),
          },
        },
        "span:nth-of-type(1)": {
          top: "40%",
          height: "2px",
        },
        "span:nth-of-type(3)": {
          top: "60%",
          height: "2px",
        },
      }}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
