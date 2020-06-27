import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import Img from "gatsby-image";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { PostProps } from "./Post.model";

function PostCover({ post }: PostProps) {
  return (
    <Styled>
      <Link
        to={post.path}
        sx={{
          textDecoration: `none`,
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Img
          sx={{ maxHeight: "240px", minHeight: "240px", minWidth: "100%" }}
          fluid={post.cover.childImageSharp.fluid}
        />
      </Link>
    </Styled>
  );
}

export default PostCover;
