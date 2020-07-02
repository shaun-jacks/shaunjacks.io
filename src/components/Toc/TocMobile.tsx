import React, { useState } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import logo from "../../images/shaunjacks-logo-light-192px.svg";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import TocMobileIcon from "./TocMobileIcon";
import TableOfContents from "./TableOfContents";
import { PostNode } from "../Post/Post.model";
import SideDrawer from "../Drawer";

export interface TocMobileProps {
  children?: JSX.Element;
  postNode?: PostNode;
  slug?: string;
}

export default function TocMobile({ postNode, slug }: TocMobileProps) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const toggleOpen = () => setSideDrawerOpen(!sideDrawerOpen);
  return (
    <React.Fragment>
      <SideDrawer
        direction="left"
        drawerOpen={sideDrawerOpen}
        toggleOpen={toggleOpen}
      >
        <div sx={{ px: 3, mt: 4, overflow: "auto" }}>
          {postNode && (
            <TableOfContents
              items={postNode?.tableOfContents?.items}
              depth={2}
              location={slug}
              toggleOpen={toggleOpen}
            />
          )}
        </div>
      </SideDrawer>
      <TocMobileIcon {...{ setSideDrawerOpen, sideDrawerOpen }} />
    </React.Fragment>
  );
}
