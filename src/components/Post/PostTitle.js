import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

function PostTitle(props) {
  const { post } = props;

  return (
    <Styled.h2 sx={{ my: 1, ml: 2 }}>
      <Styled.a
        as={Link}
        to={post.path}
        sx={{
          textDecoration: `none`,
          transition: "all .3s ease",
          "&:hover": {
            cursor: "pointer",
            color: lighten("primary", 0.2),
          },
        }}
      >
        {post.title}
      </Styled.a>
    </Styled.h2>
  );
}

export default PostTitle;
