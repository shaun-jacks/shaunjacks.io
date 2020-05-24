import React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";
import { Link } from "gatsby";

function NavItem({ link }) {
  return (
    <Styled.h3
      key={link.url}
      as={Link}
      to={link.url}
      sx={{
        m: 3,
        color: "text",
        textDecoration: `none`,
        color: "text",
        transition: "all .3s ease",
        "&:hover": {
          color: lighten("primary", 0.3),
        },
      }}
    >
      {link.name}
    </Styled.h3>
  );
}

export default NavItem;
