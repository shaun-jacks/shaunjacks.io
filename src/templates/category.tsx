import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/Post/PostListing";
import CatHeader from "../components/Category/CatHeader";
import config from "../../data/SiteConfig";
import { PostEdge } from "../components/Post/Post.model";

interface CategoryTemplateProps {
  pageContext: any;
  data: {
    allMdx: {
      edges: PostEdge[];
    };
  };
}

export default function CategoryTemplate({
  pageContext,
  data: {
    allMdx: { edges: postEdges },
  },
}: CategoryTemplateProps) {
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
      filter: {
        frontmatter: { publish: { eq: "yes" }, category: { eq: $category } }
      }
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
