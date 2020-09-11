import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import Img from "gatsby-image";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { PostProps } from "./Post.model";

function PostCover({ post, dimensions }: PostProps) {
  return (
    <Styled>
      <Link
        to={post.path}
        sx={{
          textDecoration: `none`,
          cursor: "pointer",
        }}
      >
        <Img
          sx={{
            maxHeight: dimensions ? dimensions : "240px",
            minHeight: dimensions ? dimensions : "240px",
            minWidth: "100%",
            zIndex: -1,
          }}
          fluid={post.cover.childImageSharp.fluid}
        />
      </Link>
    </Styled>
  );
}

export default PostCover;
