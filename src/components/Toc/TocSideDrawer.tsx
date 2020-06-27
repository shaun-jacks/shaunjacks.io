import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { IconContext } from "react-icons";
import { BsCodeSlash } from "react-icons/bs";

export default function TocSideDrawer({
  children,
}: {
  children?: JSX.Element;
}) {
  return (
    <div
      sx={{
        position: "fixed",
        top: "53px",
        left: "0px",
        backgroundColor: "panelBackground",
        width: "320px",
        height: "calc(100vh - 53px)",
        zIndex: 2,
        boxShadow: "0px 4px 16px, rgba(0, 0, 0, .35)",
      }}
    >
      {children}
    </div>
  );
}
