import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/Post/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import _ from "lodash";
import { BlogProps, IndexEdges } from "./index";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";
import CategoryButton from "../components/Category/CategoryButton";
import TagButton from "../components/Tag/TagButton";

export default function Blog({ data: { allMdx } }: BlogProps) {
  // Get all unique tags in every blog post
  const getAllUniqueTags = (allMdx: IndexEdges) =>
    allMdx.edges.reduce(
      (acc, edge) => ({
        ...acc,
        ...edge.node.frontmatter.tags.reduce(
          (acc2, tag) => ({
            ...acc2,
            [tag]: true,
          }),
          {}
        ),
      }),
      {}
    );
  const getAllUniqueCategories = (allMdx: IndexEdges) =>
    allMdx.edges.reduce(
      (acc, edge) => ({
        ...acc,
        [edge.node.frontmatter.category]: true,
      }),
      {}
    );
  const tagsMap = getAllUniqueTags(allMdx);
  const categoriesMap = getAllUniqueCategories(allMdx);

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
        <Styled.h1>Explore</Styled.h1>
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {Object.keys(categoriesMap).map((category, i) => (
            <CategoryButton key={i} category={category} />
          ))}
        </div>
        <div
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            my: 4,
            justifyContent: "center",
          }}
        >
          {Object.keys(tagsMap).map((tag, i) => (
            <TagButton key={i} tag={tag} />
          ))}
        </div>
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
