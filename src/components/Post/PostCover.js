import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTitle from "./PostTitle";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

function PostCover(props) {
  const { post } = props;

  return (
    <Styled.a
      as={Link}
      to={post.path}
      sx={{
        textDecoration: `none`,
        transition: "all .3s ease",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Img
        sx={{ minHeight: "110px", minWidth: "100px" }}
        fixed={post.cover.childImageSharp.fixed}
      />
    </Styled.a>
  );
}

export default PostCover;
