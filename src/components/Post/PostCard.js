import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTitle from "./PostTitle";
import PostCover from "./PostCover";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

function PostCard(props) {
  const { post } = props;

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
            <PostHeaderLong post={post} />
          </div>
          {post.cover && <PostCover post={post} />}
        </Styled.div>
      </Styled>
    </div>
  );
}

export default PostCard;
