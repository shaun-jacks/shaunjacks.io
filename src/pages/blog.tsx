import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/Post/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import AvatarLinks from "../components/Avatar/AvatarLinks";
import { BlogProps } from "./index";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

export default function Blog({ data: { allMdx } }: BlogProps) {
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
        <Styled.h1 sx={{ textAlign: "center" }}>
          Welcome to the Blog Hub
        </Styled.h1>
        <div
          sx={{ width: "100%", display: "flex", alignItems: "center", mb: 3 }}
        ></div>
        <PostListing postEdges={allMdx.edges} />
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
                fluid(maxWidth: 448) {
                  ...GatsbyImageSharpFluid
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
