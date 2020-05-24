import React from "react";
import _ from "lodash";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";

function FooterLink(props) {
  const { url, label } = props;

  return (
    <a
      sx={{
        color: "secondary",
        pr: 4,
        pb: 2,
        textDecoration: "none",
        "&:hover": { cursor: "pointer" },
      }}
      href={url}
    >
      {label}
    </a>
  );
}

export default FooterLink;
