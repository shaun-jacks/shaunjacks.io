import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import CardTag from "./PostTag";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

const PostHeaderLong = (props) => {
  const { post } = props;

  return (
    <div sx={{ mb: `-1px`, ml: 2, mr: 3 }}>
      <div sx={{ display: `flex`, flexDirection: `column`, color: "text" }}>
        <div>
          <small sx={{ mr: 2 }}>{post.date}</small>
        </div>
        <small
          sx={{
            fontSize: "12px",
            mt: 2,
          }}
        >
          {post.excerpt}
        </small>
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
              <CardTag
                sx={{ marginLeft: 2 }}
                tag={tag}
                index={i}
                length={post.tags.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostHeaderLong;
