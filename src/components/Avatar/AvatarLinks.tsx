import React from "react";

import { IconContext } from "react-icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

export default function AvatarLinks() {
  const icons = [
    {
      url: "https://www.linkedin.com/in/shaun-jackson/",
      icon: <FaLinkedinIn />,
    },
    {
      url: "https://github.com/shaun-jacks",
      icon: <FaGithub />,
    },
  ];

  return (
    <div sx={{ display: "flex", justifyContent: "center" }}>
      {icons.map((icon) => (
        <Styled.a
          href={icon.url}
          sx={{
            mr: 2,
            p: 1,
            textDecoration: "none",
            color: "inherit",
            borderRadius: "2px",
            transition: "all .3s ease",
            ":hover": { bg: lighten("primary", 0.1), cursor: "pointer" },
          }}
        >
          <IconContext.Provider value={{ size: "1.25em" }}>
            {icon.icon}
          </IconContext.Provider>
        </Styled.a>
      ))}
    </div>
  );
}
