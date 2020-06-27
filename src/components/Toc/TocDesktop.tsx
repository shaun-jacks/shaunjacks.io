import React from "react";
import _ from "lodash";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export default function TocDesktop({ children }: { children?: JSX.Element }) {
  return (
    <div
      sx={{
        "@media screen and (max-width: 921px)": {
          display: "none",
        },
      }}
    >
      <div
        sx={{
          position: "sticky",
          top: 75,
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
