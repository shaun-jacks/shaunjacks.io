import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

function PostTag({ tag, index, length }) {
  return (
    <Styled.p
      sx={{
        color: `primary`,
        textDecoration: `none`,
        boxSizing: `content-box`,
        display: `inline-block`,
        mt: 1,
        pr: 1,
        fontSize: "12px",
        transition: "all .3s ease",
        "&:hover": {
          cursor: "pointer",
          color: lighten("primary", 0.2),
        },
      }}
      as={Link}
      to={`/tags/${_.kebabCase(tag)}/`}
    >
      {tag}
      {index === length - 1 ? "" : ", "}
    </Styled.p>
  );
}

export default PostTag;
