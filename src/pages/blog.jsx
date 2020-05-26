import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/Post/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import AvatarLinks from "../components/Avatar/AvatarLinks";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

export default function Blog({ data: { allMdx } }) {
  const [searchVal, setSearchVal] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(allMdx.edges);

  function handleChange(event) {
    const newSearchVal = event.target.value;
    const updatedPosts = allMdx.edges.filter(
      (post) =>
        post.node.frontmatter.title
          .toLowerCase()
          .includes(searchVal.toLowerCase()) ||
        post.node.frontmatter.category
          .toLowerCase()
          .includes(searchVal.toLowerCase()) ||
        post.node.frontmatter.tags.some((tag) =>
          tag.toLowerCase().includes(searchVal.toLowerCase())
        )
    );
    setSearchVal(newSearchVal);
    setFilteredPosts(newSearchVal === "" ? allMdx.edges : updatedPosts);
  }

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
            name="searchVal"
            value={searchVal}
            placeholder="Type here to filter by title, category or tag"
            onChange={handleChange}
          />
        </div>
        <PostListing postEdges={filteredPosts} />
        <AvatarLinks />
      </Styled>
    </Layout>
  );
}

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
          excerpt(pruneLength: 90)
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
