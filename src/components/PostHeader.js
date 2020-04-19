import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTags from "./PostTags";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const PostHeader = props => {
  const { post } = props;

  return (
    <div sx={{ mb: `-1px`, mx: 2 }}>
      <div sx={{ display: `flex`, flexDirection: `column`, color: "text" }}>
        <div>
          <small sx={{ mr: 2 }}>{post.date}</small>
          <small>{post.timeToRead} minute(s)</small>
        </div>
        <div
          sx={{
            display: `flex`,
            flexWrap: `wrap`,
            mt: 2,
            alignItems: `baseline`
          }}
        >
          <Styled.p
            as={Link}
            sx={{
              color: `primary`,
              textDecoration: `none`,
              border: `solid 1px`,
              boxSizing: `content-box`,
              display: `inline-block`,
              px: `4px`,
              borderRadius: `5px`,
              p: 1,
              mb: `10px`,
              mr: 2
            }}
            to={`/categories/${_.kebabCase(post.category)}/`}
          >
            {post.category}
          </Styled.p>
          <PostTags tags={post.tags} />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
