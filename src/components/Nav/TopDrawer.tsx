import React from "react";
import { Link } from "gatsby";
import HamburgerIcon from "./HamburgerIcon";
import ToggleMode from "./ToggleMode";
import TopDrawerOverlay from "./TopDrawerOverlay";
import TopDrawerPanel from "./TopDrawerPanel";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

interface TopDrawerProps {
  navHeight: string;
  isOpen: boolean;
  toggleOpen: () => void;
  menuLinks: { url: string; name: string }[];
}

export default function TopDrawer({
  navHeight,
  isOpen,
  toggleOpen,
  menuLinks,
}: TopDrawerProps) {
  return (
    <div>
      {isOpen && (
        <div
          sx={{
            position: "absolute",
            top: navHeight,
            left: "0px",
            height: `calc(100vh - ${navHeight})`,
            width: "100vw",
          }}
        >
          <TopDrawerPanel menuLinks={menuLinks} />
          <TopDrawerOverlay toggleOpen={toggleOpen} />
        </div>
      )}
    </div>
  );
}
