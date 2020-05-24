import React from "react";
import _ from "lodash";
import siteConfig from "../../../data/SiteConfig";
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
          flexDirection: "column",
          maxWidth: `container`,
          m: "auto",
        }}
      >
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: `center`,
            maxWidth: `container`,
            flexWrap: "wrap",
            px: 3,
            py: 4,
          }}
        >
          <div
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a
              sx={{ color: "secondary", pr: 4, pb: 2 }}
              href="https://patreon.com/shaunjacks"
            >
              Patreon
            </a>
            <a
              sx={{
                color: "secondary",
              }}
              href="https://ko-fi.com/shaunjacks"
            >
              Ko-Fi
            </a>
          </div>
          <div sx={{ mx: 1, fontSize: "12px" }}> {siteConfig.copyright} </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
