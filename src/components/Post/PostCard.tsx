import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTitle from "./PostTitle";
import PostCover from "./PostCover";
import PostHeader from "./PostHeader";
import { PostProps } from "./Post.model";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";

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
              "@media screen and (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            {post.cover && <PostCover post={post} />}
          </div>
        </Styled.div>
      </Styled>
    </div>
  );
}

export default PostCard;
