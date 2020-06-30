import React, { useState } from "react";
import _ from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import NavItem from "../Nav/NavItem";
import SideDrawer from "../Drawer";
import { mediaQueries } from "../../gatsby-plugin-theme-ui";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";

const mobileNavLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "About",
    url: "/about",
  },
];

export default function MobileNav() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const toggleDrawerOpen = () => setSideDrawerOpen(!sideDrawerOpen);
  return (
    <React.Fragment>
      <div
        sx={{
          ml: 3,
          [mediaQueries.sm]: {
            display: "none",
          },
        }}
      >
        {sideDrawerOpen ? (
          <div
            sx={{
              p: 1,
              cursor: "pointer",
              borderRadius: 2,
              "&:hover": { bg: "muted" },
            }}
            onClick={toggleDrawerOpen}
          >
            <IconContext.Provider value={{ size: "1.5em" }}>
              <AiOutlineClose />
            </IconContext.Provider>
          </div>
        ) : (
          <div
            sx={{
              p: 1,
              cursor: "pointer",
              borderRadius: "5px",
              "&:hover": { bg: "muted" },
            }}
            onClick={toggleDrawerOpen}
          >
            <IconContext.Provider value={{ size: "1.5em" }}>
              <RiMenu3Line onClick={toggleDrawerOpen} />
            </IconContext.Provider>
          </div>
        )}
      </div>
      <div
        sx={{
          [mediaQueries.sm]: {
            display: "none",
          },
        }}
      >
        <SideDrawer toggleOpen={toggleDrawerOpen} drawerOpen={sideDrawerOpen}>
          <nav
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {mobileNavLinks.map((link, i) => {
              return <NavItem sx={{ flex: "flex-grow" }} key={i} link={link} />;
            })}
          </nav>
        </SideDrawer>
      </div>
    </React.Fragment>
  );
}
