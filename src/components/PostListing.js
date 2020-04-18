/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";
import React, { Fragment } from "react";
import { Link } from "gatsby";
import PostHeader from "./PostHeader";
import PostCard from "./PostCard";

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

    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <div key={post.title}>
            <Styled sx={{ mb: "40px" }}>
              <img sx={{ width: "256px", height: "200px" }} src={post.cover} />
              <Styled.h1 sx={{ mb: `1rem` }}>
                <Styled.a
                  as={Link}
                  to={post.path}
                  sx={{ textDecoration: `none`, mb: "1rem" }}
                >
                  {post.title}
                </Styled.a>
              </Styled.h1>
              <PostHeader post={post} />
              <Styled.p sx={{ mt: -1 }}>{post.excerpt}</Styled.p>
            </Styled>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
