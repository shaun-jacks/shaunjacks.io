import * as React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

export default function SubscribeButton() {
  return (
    <a
      href="https://shaunjacks.substack.com"
      sx={{
        borderRadius: "5px",
        textDecoration: "none",
        color: "background",
        cursor: "pointer",
        outline: "none",
        backgroundColor: "primary",
        border: "3px solid text",
        borderColor: "primary",
        borderWidth: "1px",
        fontSize: "16px",
        padding: "4px 11px",
        boxShadow: "0 2px 0 rgba(0,0,0,.045)",
        transition: "all .3s ease",
        "&:focus, &:hover": {
          outline: "none",
          borderColor: lighten("primary", 0.2),
          backgroundColor: lighten("primary", 0.2),
        },
      }}
    >
      <Styled.h3 sx={{ m: 0, p: ".5em 1.5em", color: "background" }}>
        Subscribe
      </Styled.h3>
    </a>
  );
}
