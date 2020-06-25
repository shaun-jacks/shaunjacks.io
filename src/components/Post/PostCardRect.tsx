import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTitle from "./PostTitle";
import PostCover from "./PostCover";
import PostHeader from "./PostHeader";
import { PostProps } from "./Post.model";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";

function PostCardRect({ post }: PostProps) {
  return (
    <Styled.div
      sx={{
        my: 2,
        minWidth: "100px",
        width: "100%",
        maxWidth: "448px",
        padding: "24px",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        fontSize: "19px",
        "@media screen and (max-width: 700px)": {
          maxWidth: "448px",
        },
        "@media screen and (min-width: 701px)": {
          maxWidth: "350px",
        },
      }}
      key={post.title}
    >
      <div
        sx={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "240px",
          marginBottom: "16px",
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
