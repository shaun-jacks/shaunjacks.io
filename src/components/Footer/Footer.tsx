import React from "react";
import _ from "lodash";
import siteConfig from "../../../data/SiteConfig";
import FooterLink from "./FooterLink";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import AvatarLinks from "../Avatar/AvatarLinks";
import FooterLogos from "./FooterLogos";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer
      sx={{
        width: "100%",
        variant: "styles.footer",
        backgroundColor: "panelBackground",
        color: "panelText",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: `container`,
          mx: "auto",
          my: 3,
          pt: 3,
          pb: 2,
          fontSize: "12px",
          ".row": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: `center`,
            maxWidth: `container`,
            flexWrap: "wrap",
            px: 3,
            pt: 1,
            a: {
              mr: 3,
            },
          },
          ".row-container": {
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <div className="row">
          <div className="row-container">
            <FooterLogos />
          </div>
          <div sx={{ mx: 1 }}>
            <AvatarLinks />
          </div>
        </div>
        <div className="row">
          <div className="row-container">
            <FooterLink url="https://patreon.com/shaunjacks" label="Patreon" />
            <FooterLink url="https://ko-fi.com/shaunjacks" label="Ko-Fi" />
          </div>
          <div
            sx={{
              mx: 1,
              display: "flex",
              fontSize: "10px",
              justifyContent: "flex-end",
            }}
          >
            {" "}
            {siteConfig.copyright}{" "}
          </div>
        </div>
        <div className="row">
          <div className="row-container">
            <Link
              sx={{ textDecoration: "none", color: "primary" }}
              to="/cookie-policy"
            >
              Cookie Policy
            </Link>{" "}
            <Link
              sx={{ textDecoration: "none", color: "primary" }}
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              sx={{ textDecoration: "none", color: "primary" }}
              to="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>{" "}
          </div>
          <div
            sx={{
              mx: 1,
              display: "flex",
              fontSize: "10px",
              justifyContent: "flex-end",
            }}
          ></div>
        </div>
      </div>
    </footer>
  );
}
