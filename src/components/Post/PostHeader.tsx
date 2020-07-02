import React from "react";
import _ from "lodash";
import TagButton from "../Tag/TagButton";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { PostProps } from "./Post.model";
import { mediaQueries } from "../../gatsby-plugin-theme-ui";

function PostHeader({ post }: PostProps) {
  return (
    <div sx={{ ml: 2, mr: 3 }}>
      <div sx={{ display: `flex`, flexDirection: `column`, color: "text" }}>
        <div sx={{ mt: 2 }}>
          <small sx={{ mr: 2, fontSize: "14px" }}>{post.date}</small>
        </div>
        <small
          sx={{
            mt: 2,
            fontSize: 1,
            display: "none",
            [mediaQueries.sm]: {
              display: "inline",
            },
          }}
        >
          {post.excerpt}
        </small>
        <div
          sx={{
            display: `flex`,
            flexWrap: `wrap`,
            alignItems: `baseline`,
            mt: 2,
          }}
        >
          {post.tags.map((tag, i) => {
            return <TagButton sx={{ ml: 2 }} tag={tag} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
