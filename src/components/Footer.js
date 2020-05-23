import React from "react";
import _ from "lodash";
import PostTages from "./PostTags";
import siteConfig from "../../data/SiteConfig";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";

function Footer(props) {
  // const { post } = props;

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
          justifyContent: "space-between",
          alignItems: `center`,
          maxWidth: `container`,
          m: "auto",
          p: 3,
        }}
      >
        <div>
          Made with 🤟, ☕, and 🎶 using{" "}
          <a sx={{ color: "secondary" }} href="https://www.gatsbyjs.org/">
            Gatsby.js
          </a>
        </div>
        <div sx={{ mx: 1 }}> {siteConfig.copyright} </div>
      </div>
    </footer>
  );
}

export default Footer;
