import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";
import { PostProps } from "./Post.model";
import TagButton from "../Tag/TagButton";

export default function PostTemplateHeader({ post }: PostProps) {
  return (
    <div sx={{ mb: `-1px`, ml: 2, mr: 3 }}>
      <div sx={{ display: `flex`, flexDirection: `column`, color: "text" }}>
        <div
          sx={{
            display: `flex`,
            flexWrap: `wrap`,
            alignItems: `baseline`,
          }}
        >
          <small sx={{ mr: 2, fontSize: "14px" }}>{post.date}</small>
          {post.tags.map((tag, i) => {
            return <TagButton sx={{ marginLeft: 2 }} tag={tag} key={i} />;
          })}

          <small
            sx={{
              fontSize: "14px",
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
