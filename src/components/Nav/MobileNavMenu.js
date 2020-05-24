import React from "react";
import { Link } from "gatsby";
import HamburgerIcon from "./HamburgerIcon";
import ToogleMode from "./ToogleMode";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

class MobileNavMenu extends React.Component {
  render() {
    const { siteTitle } = this.props;

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
        <div sx={{ flex: "1", height: "100%" }}>
          <HamburgerIcon />
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
        <div sx={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
          <ToogleMode />
        </div>
      </div>
    );
  }
}

export default MobileNavMenu;
