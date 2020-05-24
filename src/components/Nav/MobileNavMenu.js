import React from "react";
import { Link } from "gatsby";
import HamburgerIcon from "./HamburgerIcon";
import ToogleMode from "./ToogleMode";
import TopDrawer from "./TopDrawer";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

function MobileNavMenu({ siteTitle, menuLinks }) {
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
        m: "auto",
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
      <div sx={{ flex: "1", display: "flex", justifyContent: "flex-end" }} />
    </div>
  );
}

export default MobileNavMenu;
