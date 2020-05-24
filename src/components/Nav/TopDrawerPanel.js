import React from "react";
import NavItem from "./NavItem";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";
import { Link } from "gatsby";
import ToogleMode from "./ToogleMode";

function TopDrawerPanel({ isOpen, siteTitle, menuLinks }) {
  return (
    <div
      sx={{
        position: "relative",
        width: "100%",
        height: "85%",
        backgroundColor: "panelBackground",
        color: "background",
        zIndex: 1000,
        transformOrigin: "top",
        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
      }}
    >
      <div
        sx={{
          display: `flex`,
          justifyContent: `space-around`,
          flexDirection: "column",
          alignItems: `center`,
          height: "100%",
          m: "auto",
        }}
      >
        <div sx={{ flex: ".5" }} />
        <nav
          sx={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            justifyContent: "flex-start",
            fontSize: "21px",
          }}
        >
          <NavItem link={{ name: "Home", url: "/" }} />
          {menuLinks.map((link) => {
            return <NavItem link={link} />;
          })}
          <div sx={{ m: 3 }}>
            <ToogleMode />
          </div>
        </nav>
        <div sx={{ flex: "1" }} />
      </div>
    </div>
  );
}

export default TopDrawerPanel;
