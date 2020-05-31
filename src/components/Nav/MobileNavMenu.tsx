import React from "react";
import { Link } from "gatsby";
import HamburgerIcon from "./HamburgerIcon";
import ToggleMode from "./ToggleMode";
import TopDrawer from "./TopDrawer";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import Search from "../Search/Search";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

interface MobileNavMenuProps {
  siteTitle: string;
  menuLinks: { url: string; name: string }[];
}

export default function MobileNavMenu({
  siteTitle,
  menuLinks,
}: MobileNavMenuProps) {
  const [isOpen, setOpen] = React.useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      sx={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        maxWidth: `container`,
        height: "100%",
        my: "auto",
        mr: 3,
      }}
    >
      <TopDrawer
        menuLinks={menuLinks}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        navHeight="45px"
      />
      <div sx={{ flex: "1", height: "100%" }}>
        <HamburgerIcon toggleOpen={toggleOpen} />
      </div>
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
        <div sx={{ flex: "1" }}>{siteTitle}</div>
      </Link>
      <div
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "flex-end",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Search />
      </div>
    </div>
  );
}
