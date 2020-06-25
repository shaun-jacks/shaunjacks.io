import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";
import { PostTagProps } from "./Post.model";

export default function PostTag({ tag, index, length }: PostTagProps) {
  return (
    <Link
      sx={{
        color: `primary`,
        textDecoration: `none`,
        boxSizing: `content-box`,
        display: `inline-block`,
        mt: 1,
        pr: 1,
        fontSize: "14px",
        border: "1px solid",
        borderColor: "primary",
        borderRadius: "20px",
        mr: "12px",
        px: "12px",
        py: ".4rem",
        transition: "all .3s ease",
        "&:hover": {
          cursor: "pointer",
          color: lighten("primary", 0.2),
          borderColor: lighten("primary", 0.2),
        },
      }}
      to={`/tags/${_.kebabCase(tag)}/`}
    >
      {tag}
    </Link>
  );
}
