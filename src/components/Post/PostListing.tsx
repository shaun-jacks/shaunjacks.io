/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import React, { Fragment } from "react";
import PostCard from "./PostCard";
import { PostEdge } from "./Post.model";
import { PostListingProps } from "./Post.model";
import PostCardRect from "./PostCardRect";

export default function PostListing({ postEdges }: PostListingProps) {
  function getPostList() {
    return postEdges.map((postEdge) => ({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
      category: postEdge.node.frontmatter.category,
    }));
  }

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
        margin: "auto",
      }}
    >
      {getPostList().map((post, i) => (
        <PostCardRect key={i} post={post} />
      ))}
    </div>
  );
}
