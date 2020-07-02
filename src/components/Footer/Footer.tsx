import React from "react";
import _ from "lodash";
import siteConfig from "../../../data/SiteConfig";
import FooterLink from "./FooterLink";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import AvatarLinks from "../Avatar/AvatarLinks";
import FooterLogos from "./FooterLogos";
import { Link } from "gatsby";
import { lighten } from "@theme-ui/color";

export default function Footer() {
  return (
    <footer
      sx={{
        width: "100%",
        variant: "styles.footer",
        bg: "panelBackground",
        color: "panelText",
      }}
    >
      <div sx={{ mx: "auto", my: 4, maxWidth: "1000px" }}>
        <div
          sx={{
            m: "auto",
            maxWidth: "1000px",
            display: "grid",
            gridTemplateRows: "repeat(3, 50px)",
            gridTemplateColumns: "repeat(auto-fit, minmax(33.33%, 1fr))",
            gridAutoFlow: "column",
            alignItems: "center",
            justifyItems: "center",
            textAlign: "center",
            fontSize: "15px",
            ".footer-link": {
              m: 1,
              p: 2,
              textDecoration: "none",
              color: "primary",
              "&:hover": {
                cursor: "pointer",
                color: lighten("primary", 0.2),
              },
            },
          }}
        >
          <Link className="footer-link" to="/">
            Home
          </Link>{" "}
          <Link className="footer-link" to="/about">
            About
          </Link>{" "}
          <Link className="footer-link" to="/blog">
            Blog
          </Link>{" "}
          <FooterLink url="https://patreon.com/shaunjacks" label="Patreon" />
          <FooterLink url="https://ko-fi.com/shaunjacks" label="Ko-Fi" />
          <div sx={{ display: "flex", justifyContent: "flex-start", pl: 1 }}>
            {" "}
            <AvatarLinks />
          </div>
          <Link className="footer-link" to="/terms-and-conditions">
            Terms and Conditions
          </Link>{" "}
          <Link className="footer-link" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="footer-link" to="/cookie-policy">
            Cookie Policy
          </Link>{" "}
          <div></div>
        </div>
        <div sx={{ display: "flex", justifyContent: "center" }}>
          <FooterLogos />
        </div>
        <div sx={{ display: "flex", justifyContent: "center" }}>
          <Styled.p sx={{ fontSize: "10px" }}>{siteConfig.copyright}</Styled.p>{" "}
        </div>
      </div>
    </footer>
  );
}
