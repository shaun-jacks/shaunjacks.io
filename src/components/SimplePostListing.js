/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import PostHeader from "./PostHeader";
import GitIcon from "../../content/assets/git.svg";
import PostCard from "./PostCard";
import Img from "gatsby-image";
import { darken, lighten } from "@theme-ui/color";

const CategoryMap = {
  GIT: {
    icon: <GitIcon width="128px" height="128px" />,
  },
};

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges &&
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
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "auto",
        }}
      >
        {/* Your post list here. */
        postList.map((post) => (
          <div
            sx={{
              margin: "1em",
              width: "256px",
              transition: "box-shadow 0.1s ease-in-out",
              border: "2px solid",
              borderColor: "panelBackground",
              transition: "all .3s ease",
              "&:hover": {
                cursor: "pointer",
                bg: lighten("background", 0.1),
              },
            }}
            key={post.title}
          >
            <Styled
              sx={{
                mt: "1em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Styled.a
                as={Link}
                to={post.path}
                sx={{
                  textDecoration: `none`,
                }}
              >
                {CategoryMap.hasOwnProperty(post.category)
                  ? CategoryMap[post.category].icon
                  : ""}
              </Styled.a>

              <div sx={{ textAlign: "center", mb: "1em", mx: "1em" }}>
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
