import React from "react";
import { Link } from "gatsby";
import HamburgerIcon from "./HamburgerIcon";
import ToogleMode from "./ToogleMode";
import TopDrawerOverlay from "./TopDrawerOverlay";
import TopDrawerPanel from "./TopDrawerPanel";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

class TopDrawer extends React.Component {
  render() {
    const { siteTitle, navHeight, isOpen } = this.props;

    return (
      <div
        sx={{
          position: "absolute",
          top: navHeight,
          left: "0px",
          height: `calc(100vh - ${navHeight})`,
          width: "100vw",
        }}
      >
        <TopDrawerPanel isOpen={isOpen} />
        <TopDrawerOverlay isOpen={isOpen} />
      </div>
    );
  }
}

export default TopDrawer;
