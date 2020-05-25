import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/Post/PostListing";
import TagHeader from "../components/Tag/TagHeader";
import config from "../../data/SiteConfig";

export default function TagTemplate({
  pageContext,
  data: {
    allMdx: { edges: postEdges },
  },
}) {
  const { tag } = pageContext;
  return (
    <Layout>
      <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
      <TagHeader tag={tag} />
      <PostListing postEdges={postEdges} />
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const tagQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
