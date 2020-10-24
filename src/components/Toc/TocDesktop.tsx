import React from "react";
import _ from "lodash";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import Toc from ".";
import { mediaQueries } from "../../gatsby-plugin-theme-ui";

export default function TocDesktop({ children }: { children?: JSX.Element }) {
  return (
    <div sx={{ display: "none", [mediaQueries.lg]: { display: "inline" } }}>
      <div
        sx={{
          position: "sticky",
          top: 120,
          overflow: "scroll",
          mr: 3,
          ml: 2,
        }}
      >
        {children}
      </div>
    </div>
  );
}
