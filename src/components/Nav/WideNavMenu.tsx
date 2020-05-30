import React from "react";
import ToggleMode from "./ToggleMode";
import { Link } from "gatsby";
import NavItem from "./NavItem";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

interface WideNavMenuProps {
  siteTitle: string;
  menuLinks: { url: string; name: string }[];
}

export default function WideNavMenu({
  menuLinks,
  siteTitle,
}: WideNavMenuProps) {
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
        {menuLinks.map((link, i) => {
          return <NavItem key={i} link={link} />;
        })}
        <ToggleMode />
      </div>
    </nav>
  );
}
