import React, { useState } from "react";
import siteConfig from "../../../data/SiteConfig";
import logo from "../../images/shaunjacks-logo-light-192px.svg";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { Link } from "gatsby";
import NavItem from "./NavItem";
import ToggleMode from "./ToggleMode";
import Search from "../Search/Search";
import { mediaQueries } from "../../gatsby-plugin-theme-ui";
import MobileNav from "./MobileNav";

interface NavMenuProps {
  menuLinks: { url: string; name: string }[];
}

export default function NavMenu({ menuLinks }: NavMenuProps) {
  return (
    <div>
      <Styled
        sx={{
          position: `fixed`,
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 10,
          height: "56px",
          bg: `panelBackground`,
          boxShadow: `1px 2px 8px rgba(0, 0, 0, 0.2)`,
        }}
      >
        <nav
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            maxWidth: `container`,
            height: "100%",
            m: "auto",
            px: 2,
          }}
        >
          <Link
            to="/"
            activeClassName="active"
            sx={{
              textDecoration: "none",
              color: "text",
              display: "flex",
              alignItems: "center",
              "&.active": {
                color: "primary",
              },
            }}
          >
            <img src={logo} width="45" height="45" />
            <Styled.h3
              sx={{
                cursor: "pointer",
                p: 2,
                fontSize: 2,
                borderRadius: "10px",
                ":hover": {
                  bg: "muted",
                },
              }}
            >
              shaunjacks.io
            </Styled.h3>
          </Link>
          <div sx={{ flex: "1" }} />
          <div
            sx={{
              display: `flex`,
              flex: "1",
              justifyContent: "flex-end",
              alignItems: `center`,
              maxHeight: "100%",
              mr: 1,
            }}
          >
            <div
              sx={{
                display: "none",
                [mediaQueries.sm]: {
                  display: "flex",
                },
              }}
            >
              {menuLinks.map((link, i) => {
                return <NavItem key={i} link={link} />;
              })}
            </div>
            <ToggleMode />
            <Search />
            <MobileNav />
          </div>
        </nav>
      </Styled>
    </div>
  );
}
