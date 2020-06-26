import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

interface TagButtonProps {
  tag: string;
}

export default function TagButton({ tag }: TagButtonProps) {
  return (
    <Link
      sx={{
        color: `text`,
        textDecoration: `none`,
        boxSizing: `content-box`,
        display: `inline-block`,
        mt: 1,
        pr: 1,
        fontSize: "14px",
        border: "1px solid",
        borderColor: "text",
        borderRadius: "20px",
        mr: "12px",
        px: "12px",
        py: ".4rem",
        "&:hover": {
          cursor: "pointer",
          color: "primary",
          borderColor: "primary",
        },
      }}
      to={`/tags/${_.kebabCase(tag)}/`}
    >
      {tag}
    </Link>
  );
}
