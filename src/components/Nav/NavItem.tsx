import React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";
import { Link } from "gatsby";

interface NavItemProps {
  link: {
    url: string;
    name: string;
  };
}

export default function NavItem({ link }: NavItemProps) {
  return (
    <Link key={link.url} to={link.url} sx={{ textDecoration: "none" }}>
      <Styled.p
        sx={{
          m: 3,
          textDecoration: `none`,
          color: "text",
          transition: "all .3s ease",
          "&:hover": {
            color: lighten("primary", 0.3),
          },
        }}
      >
        {link.name}
      </Styled.p>
    </Link>
  );
}
