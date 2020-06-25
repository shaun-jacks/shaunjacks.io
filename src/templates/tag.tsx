import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/Post/PostListing";
import TagHeader from "../components/Tag/TagHeader";
import config from "../../data/SiteConfig";
import { PostEdge } from "../components/Post/Post.model";

interface TagTemplateProps {
  pageContext: any;
  data: {
    allMdx: {
      edges: PostEdge[];
    };
  };
}

export default function TagTemplate({
  pageContext,
  data: {
    allMdx: { edges: postEdges },
  },
}: TagTemplateProps) {
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
      filter: { frontmatter: { publish: { eq: "yes" }, tags: { in: [$tag] } } }
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
