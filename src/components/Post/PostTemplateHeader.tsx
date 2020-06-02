import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTag from "./PostTag";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";
import { PostProps } from "./Post.model";

export default function PostTemplateHeader({ post }: PostProps) {
  return (
    <div sx={{ mb: `-1px`, ml: 2, mr: 3 }}>
      <div sx={{ display: `flex`, flexDirection: `column`, color: "text" }}>
        <div>
          <small sx={{ mr: 2 }}>{post.date}</small>
        </div>
        <div
          sx={{
            display: `flex`,
            flexWrap: `wrap`,
            alignItems: `baseline`,
            fontSize: "12px",
          }}
        >
          {post.tags.map((tag, i) => {
            return (
              <PostTag
                sx={{ marginLeft: 2 }}
                tag={tag}
                index={i}
                key={i}
                length={post.tags.length}
              />
            );
          })}
          {"•"}
          <small
            sx={{
              fontSize: "10px",
              ml: 1,
              mt: 2,
            }}
          >
            {post.timeToRead}
            {" min"}
          </small>
        </div>
      </div>
    </div>
  );
}
