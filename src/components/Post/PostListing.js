/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import PostHeaderLong from "./PostHeaderLong";
import PostCard from "./PostCard";
import { Divider } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        category: postEdge.node.frontmatter.category,
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();

    return (
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: "auto",
        }}
      >
        {/* Your post list here. */
        postList.map((post, i) => (
          <PostCard post={post} />
        ))}
      </div>
    );
  }
}

export default PostListing;
