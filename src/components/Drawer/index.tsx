import React, { useState } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import logo from "../../images/shaunjacks-logo-light-192px.svg";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import SideDrawerPanel from "./SideDrawerPanel";
import SideDrawerOverlay from "./SideDrawerOverlay";

export interface NavMobileProps {
  children?: JSX.Element;
  direction?: "left" | "right";
  width?: string;
  drawerOpen: boolean;
  toggleOpen: () => void;
}

export default function SideDrawer({
  children,
  direction = "right",
  width = "300px",
  drawerOpen,
  toggleOpen,
}: NavMobileProps) {
  return (
    <React.Fragment>
      {drawerOpen && (
        <React.Fragment>
          <SideDrawerPanel direction={direction} width={width}>
            <div sx={{ m: 2 }}>{children}</div>
          </SideDrawerPanel>
          <SideDrawerOverlay
            width={width}
            direction={direction}
            toggleOpen={toggleOpen}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
