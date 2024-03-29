import React from "react";
import _ from "lodash";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

interface FooterLinkProps {
  url: string;
  label: string;
}

export default function FooterLink({ url, label }: FooterLinkProps) {
  return (
    <a
      sx={{
        color: "secondary",
        p: 2,
        textDecoration: "none",
        "&:hover": { cursor: "pointer", color: lighten("secondary", 0.2) },
      }}
      href={url}
    >
      {label}
    </a>
  );
}
