import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";
import { lighten } from "@theme-ui/color";
import { PostProps } from "./Post.model";

export default function PostTitle({ post }: PostProps) {
  return (
    <Styled.h2 sx={{ my: 1, ml: 2 }}>
      <Link
        to={post.path}
        sx={{
          color: "primary",
          textDecoration: `none`,
          transition: "all .3s ease",
          "&:hover": {
            cursor: "pointer",
            color: lighten("primary", 0.2),
          },
        }}
      >
        {post.title}
      </Link>
    </Styled.h2>
  );
}
