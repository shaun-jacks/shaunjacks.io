import React from "react";
import ToggleMode from "./ToggleMode";
import { Link } from "gatsby";
import NavItem from "./NavItem";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import Search from "../Search/Search";

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
        <div sx={{ ml: 3, pl: 3 }}>{siteTitle}</div>
      </Link>
      <div style={{ display: `flex`, alignItems: `center`, maxHeight: "100%" }}>
        {menuLinks.map((link, i) => {
          return <NavItem key={i} link={link} />;
        })}
        <ToggleMode />
        <div
          sx={{
            width: "100%",
            my: "auto",
            mr: 3,
            ml: "1rem",
            pt: ".1rem",
            pr: 3,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Search />
        </div>
      </div>
    </nav>
  );
}
