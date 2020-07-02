import * as React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

export default function SubscribeButton() {
  return (
    <a
      href="https://shaunjacks.substack.com"
      sx={{
        variant: "buttons.default",
      }}
    >
      <Styled.h3 sx={{ m: 0, p: ".5em 1.5em" }}>Subscribe</Styled.h3>
    </a>
  );
}
