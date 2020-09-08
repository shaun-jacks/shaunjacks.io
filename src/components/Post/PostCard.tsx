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

function PostCard({ post }: PostProps) {
  return (
    <div
      sx={{
        my: 2,
        minWidth: "100px",
        width: "100%",
      }}
      key={post.title}
    >
      <Styled sx={{ display: "flex", alignItems: "flex-start" }}>
        <Styled.div
          sx={{
            textDecoration: `none`,
            mr: 1,
            width: "100%",
            maxWidth: "900px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div sx={{ mt: 0, ml: 2 }}>
            <PostTitle post={post} />
            <PostHeader post={post} />
          </div>
          <div
            sx={{
              display: "none",
              [mediaQueries.md]: {
                display: "inline"
              },
              minHeight: "200px",
              maxHeight: "200px",
              minWidth: "200px",
              maxWidth: "200px",
              mr: 3,
            }}
          >
            {post.cover && <PostCover post={post} dimensions="200px" />}
          </div>
        </Styled.div>
      </Styled>
    </div >
  );
}

export default PostCard;
