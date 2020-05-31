import React from "react";
import _ from "lodash";
import siteConfig from "../../../data/SiteConfig";
import FooterLink from "./FooterLink";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import AvatarLinks from "../Avatar/AvatarLinks";
import FooterLogos from "./FooterLogos";

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
          m: "auto",
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
          },
          ".row-container": {
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <div className="row">
          <div className="row-container">
            <FooterLink url="https://patreon.com/shaunjacks" label="Patreon" />
            <FooterLink url="https://ko-fi.com/shaunjacks" label="Ko-Fi" />
          </div>
          <div sx={{ mx: 1 }}>
            <AvatarLinks />
          </div>
        </div>
        <div className="row">
          <div className="row-container">
            <FooterLogos />
          </div>
          <div sx={{ mx: 1 }}> {siteConfig.copyright} </div>
        </div>
      </div>
    </footer>
  );
}
