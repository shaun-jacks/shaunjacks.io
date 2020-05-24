import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const PostHeader = (props) => {
  const { post } = props;

  return (
    <div sx={{ mb: `-1px`, mx: 2 }}>
      <div sx={{ display: `flex`, flexDirection: `column`, color: "text" }}>
        <div>
          <small sx={{ mr: 2 }}>{post.date}</small>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
