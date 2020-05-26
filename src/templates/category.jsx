import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/Post/PostListing";
import CatHeader from "../components/Category/CatHeader";
import config from "../../data/SiteConfig";

export default function CategoryTemplate({
  pageContext,
  data: {
    allMdx: { edges: postEdges },
  },
}) {
  const { category } = pageContext;
  return (
    <Layout>
      <Helmet
        title={`Articles in category "${category}" | ${config.siteTitle}`}
      />
      <CatHeader category={category} />
      <PostListing postEdges={postEdges} />
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const categoryQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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
                fixed(width: 100, height: 100) {
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
