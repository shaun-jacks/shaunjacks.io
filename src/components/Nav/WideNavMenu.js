import React from "react";
import ToggleMode from "./ToggleMode";
import { Link } from "gatsby";
import NavItem from "./NavItem";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

export default function WideNavMenu({ menuLinks, siteTitle }) {
  return (
    <nav
      sx={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        maxWidth: `container`,
        height: "100%",
        m: "auto",
      }}
    >
      <Link
        to="/"
        sx={{
          textDecoration: `none`,
          color: `panelText`,
          transition: "all .3s ease",
          "&:hover": {
            color: lighten("primary", 0.3),
          },
        }}
      >
        <div sx={{ pl: "1rem" }}>{siteTitle}</div>
      </Link>
      <div style={{ display: `flex`, alignItems: `center` }}>
        {menuLinks.map((link) => {
          return <NavItem link={link} />;
        })}
        <ToggleMode />
      </div>
    </nav>
  );
}
