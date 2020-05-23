import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SimplePostListing from "../components/SimplePostListing";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import AvatarLinks from "../components/Avatar/AvatarLinks";
import AllCategories from "../components/AllCategories";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

class Blog extends React.Component {
  state = {
    searchTerm: "",
    posts: this.props.data.allMdx.edges,
    filteredPosts: this.props.data.allMdx.edges,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => this.filterPosts());
  };

  filterPosts = () => {
    const { posts, searchTerm } = this.state;

    const filteredPosts = posts.filter(
      (post) =>
        post.node.frontmatter.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        post.node.frontmatter.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        post.node.frontmatter.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    this.setState({ filteredPosts });
  };

  render() {
    const postEdges = this.props.data.allMdx.edges;
    const { searchTerm } = this.state;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <Styled
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AllCategories />
          </section>
          <Styled.h2 sx={{ textAlign: "center" }}>Articles</Styled.h2>
          <div
            sx={{ width: "100%", display: "flex", alignItems: "center", mb: 3 }}
          >
            <input
              type="text"
              sx={{
                backgroundColor: "background",
                boxShadow: "none",
                color: "primary",
                border: "2px solid",
                borderColor: "panelBackground",
                borderRadius: "2px",
                borderWidth: "1px",
                padding: "4px 11px",
                fontSize: "16px",
                transition: "all .3s ease",
                width: ["90%", "75%"],
                mb: 2,
                margin: "auto",
                "&:focus, &:hover": {
                  outline: "none",
                  bg: lighten("background", 0.1),
                },
              }}
              name="searchTerm"
              value={searchTerm}
              placeholder="Type here to filter by title, category or tag"
              onChange={this.handleChange}
            />
          </div>
          <PostListing postEdges={this.state.filteredPosts} />
          <AvatarLinks />
        </Styled>
      </Layout>
    );
  }
}

export default Blog;

/* eslint no-undef: "off" */
export const blogQuery = graphql`
  query BlogQuery {
    allMdx(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { publish: { eq: "yes" }, template: { eq: "post" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM Do, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            category
            title
            tags
            cover {
              childImageSharp {
                fixed(width: 100, height: 110) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;
