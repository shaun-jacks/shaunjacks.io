import React, { useState } from "react";
import ToggleMode from "./ToggleMode";
import { Link } from "gatsby";
import NavItem from "./NavItem";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import Search from "../Search/Search";
import logo from "../../images/shaunjacks-logo-light-192px.svg";

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav
      sx={{
        display: `flex`,
        justifyContent: isSearchOpen ? `flex-start` : `space-between`,
        alignItems: `center`,
        maxWidth: `container`,
        height: "100%",
        m: "auto",
      }}
    >
      <Link to="/" sx={{ ml: 3, pl: 3 }}>
        <img src={logo} width="53" height="53" />
      </Link>
      {!isSearchOpen && <div sx={{ flex: "1" }} />}
      <div
        style={{
          display: `flex`,
          flex: "1",
          justifyContent: "flex-end",
          alignItems: `center`,
          maxHeight: "100%",
        }}
      >
        {!isSearchOpen &&
          menuLinks.map((link, i) => {
            return <NavItem key={i} link={link} />;
          })}
        {!isSearchOpen && <ToggleMode />}
        <div
          sx={{
            width: isSearchOpen ? "100%" : "35px",
            my: "auto",
            ml: 2,
            pt: ".1rem",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Search focus={isSearchOpen} setFocus={setIsSearchOpen} />
        </div>
      </div>
    </nav>
  );
}
