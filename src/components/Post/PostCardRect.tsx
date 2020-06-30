import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTitle from "./PostTitle";
import PostCover from "./PostCover";
import PostHeader from "./PostHeader";
import { PostProps } from "./Post.model";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";
import { mediaQueries } from "../../gatsby-plugin-theme-ui";

function PostCardRect({ post }: PostProps) {
  return (
    <Styled.div
      sx={{
        my: 2,
        minWidth: "100px",
        width: "100%",
        maxWidth: "448px",
        p: 4,
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        fontSize: 3,
        [mediaQueries.md]: {
          maxWidth: "350px",
        },
      }}
      key={post.title}
    >
      <div
        sx={{
          minWidth: "100%",
          maxWidth: "100%",
          maxHeight: "240px",
          marginBottom: 3,
        }}
      >
        {post.cover && <PostCover post={post} />}
      </div>
      <div>
        <PostTitle post={post} />
        <PostHeader post={post} />
      </div>
    </Styled.div>
  );
}

export default PostCardRect;
