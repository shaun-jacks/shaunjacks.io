import React from "react";
import _ from "lodash";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

interface FooterLinkProps {
  url: string;
  label: string;
}

export default function FooterLink({ url, label }: FooterLinkProps) {
  return (
    <a
      sx={{
        color: "secondary",
        pr: 4,
        pb: 2,
        textDecoration: "none",
        transition: "all .3s ease",
        "&:hover": { cursor: "pointer", color: lighten("secondary", 0.2) },
      }}
      href={url}
    >
      {label}
    </a>
  );
}