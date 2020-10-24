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
    <Link
      key={link.url}
      activeClassName="active"
      to={link.url}
      sx={{
        textDecoration: "none",
        color: "text",
        p: 3,
        borderRadius: "10px",
        fontSize: "19px",
        "&:hover": {
          bg: "muted",
        },
        ml: 2,
        "&.active": {
          color: "primary",
        },
      }}
    >
      {link.name}
    </Link>
  );
}
