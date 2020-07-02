import React from "react";
import _ from "lodash";
import gatsbyLogo from "../../images/Gatsby-Monogram-logo.svg";
import firebaseLogo from "../../images/firebase-logo-logomark.svg";
import typescriptLogo from "../../images/typescriptlang-icon.svg";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export default function FooterLogos() {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        img: { mx: 2 },
        p: 2,
        fontSize: 0,
        a: {
          cursor: "pointer",
        },
      }}
    >
      <Styled.p sx={{ mr: 1 }}>Composed with ❤️ using </Styled.p>
      <a href="https://www.gatsbyjs.org/">
        <img
          alt="Gatsby Logo"
          src={gatsbyLogo}
          width="22"
          height="22"
          role="presentation"
          style={{
            pointerEvents: `none`,
          }}
        />
      </a>
      <a href="https://www.typescriptlang.org/">
        <img
          alt="Typescript Logo"
          src={typescriptLogo}
          width="22"
          height="22"
          role="presentation"
          sx={{
            bg: "#faf9f8",
            pointerEvents: `none`,
          }}
        />
      </a>
    </div>
  );
}
