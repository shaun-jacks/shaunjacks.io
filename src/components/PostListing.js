/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import PostHeaderLong from "./PostHeaderLong";
import PostCard from "./PostCard";
import Img from "gatsby-image";
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
        postList.map((post) => (
          <div
            sx={{
              my: 2,
              minWidth: "100px",
              width: "100%",
              transition: "all .3s ease",
              "&:hover": {
                cursor: "pointer",
                bg: lighten("background", 0.1),
              },
            }}
            key={post.title}
          >
            <Styled sx={{ display: "flex", alignItems: "flex-start" }}>
              <Styled.a
                as={Link}
                to={post.path}
                sx={{
                  textDecoration: `none`,
                  mr: 1,
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                {post.cover && (
                  <Img
                    sx={{ minHeight: "110px", minWidth: "100px" }}
                    fixed={post.cover.childImageSharp.fixed}
                  />
                )}

                <div sx={{ mt: 0, ml: 2 }}>
                  <Styled.h2 sx={{ my: 1, ml: 2 }}>
                    <Styled.a
                      as={Link}
                      to={post.path}
                      sx={{ textDecoration: `none` }}
                    >
                      {post.title}
                    </Styled.a>
                  </Styled.h2>
                  <PostHeaderLong post={post} />
                </div>
              </Styled.a>
            </Styled>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
