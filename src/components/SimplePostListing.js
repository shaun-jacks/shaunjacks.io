/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import PostHeader from "./PostHeader";
import PostCard from "./PostCard";
import Img from "gatsby-image";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        category: postEdge.node.frontmatter.category
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    console.log(postList);

    debugger;

    return (
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "auto"
        }}
      >
        {/* Your post list here. */
        postList.map(post => (
          <div
            sx={{
              margin: "1em",
              width: "256px",
              transition: "box-shadow 0.1s ease-in-out",
              "&:hover": {
                cursor: "pointer",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
              }
            }}
            key={post.title}
          >
            <Styled>
              <Styled.a
                as={Link}
                to={post.path}
                sx={{ textDecoration: `none` }}
              >
                {post.cover && <Img fixed={post.cover.childImageSharp.fixed} />}
              </Styled.a>

              <div sx={{ padding: "1rem" }}>
                <Styled.h2 sx={{ mb: `.5rem` }}>
                  <Styled.a
                    as={Link}
                    to={post.path}
                    sx={{ textDecoration: `none` }}
                  >
                    {post.title}
                  </Styled.a>
                </Styled.h2>
                <PostHeader post={post} />
              </div>
            </Styled>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
