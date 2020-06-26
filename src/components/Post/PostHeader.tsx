import React from "react";
import _ from "lodash";
import TagButton from "../Tag/TagButton";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { PostProps } from "./Post.model";

function PostHeader({ post }: PostProps) {
  return (
    <div sx={{ ml: 2, mr: 3 }}>
      <div sx={{ display: `flex`, flexDirection: `column`, color: "text" }}>
        <div sx={{ mt: "12px" }}>
          <small sx={{ mr: 2, fontSize: "14px" }}>{post.date}</small>
        </div>
        <small
          sx={{
            mt: "12px",
            fontSize: "16px",
            "@media screen and (max-width: 780px)": {
              display: "none",
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
            mt: "12px",
          }}
        >
          {post.tags.map((tag, i) => {
            return <TagButton sx={{ marginLeft: 2 }} tag={tag} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
