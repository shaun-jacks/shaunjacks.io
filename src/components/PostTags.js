import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div sx={{ display: "flex", flexWrap: "wrap" }}>
        {tags &&
          tags.map(tag => (
            <Styled
              as={Link}
              key={tag}
              to={`/tags/${_.kebabCase(tag)}`}
              sx={{ textDecoration: `none`, mt: 2 }}
            >
              <small
                sx={{
                  color: `text`,
                  mr: 1,
                  mb: 5,
                  boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.5)`,
                  p: `3px`,
                  borderRadius: `4px`
                }}
              >
                {tag}
              </small>
            </Styled>
          ))}
      </div>
    );
  }
}

export default PostTags;
