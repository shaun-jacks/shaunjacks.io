import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/Post/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import SubscribeButton from "../components/Buttons/Subscribe";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";
import { PostEdge } from "../components/Post/Post.model";

export interface BlogProps {
  data: {
    allMdx: IndexEdges;
  };
}

export interface IndexEdges {
  edges: PostEdge[];
}

interface IndexProps {
  data: {
    mostRecent: {
      edges: PostEdge[];
    };
    mostPopular: {
      edges: PostEdge[];
    };
  };
}

export default function Index({
  data: { mostRecent, mostPopular },
}: IndexProps) {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <div sx={{ maxWidth: "container", m: "auto" }}>
        <section>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "2em",
            }}
          >
            <Styled.h1 sx={{ m: ".5em" }}>Hi! I'm Shaun</Styled.h1>
            <Styled.p sx={{ textAlign: "center" }}>
              I'm a Software Engineer passionate about modern Javascript,
              Backend technologies, Data, and Cloud tooling.
            </Styled.p>
            {/* <SubscribeButton /> */}
          </div>
        </section>
        <section
          sx={{
            my: `40px`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Styled.h1 sx={{ mt: 0, color: "text" }}>Most popular</Styled.h1>
          <PostListing postEdges={mostPopular.edges} />
        </section>
        <section
          sx={{
            my: `40px`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Styled.h1 sx={{ mt: 0, color: "text" }}>Most recent</Styled.h1>
          <PostListing postEdges={mostRecent.edges} />
        </section>
        <section sx={{ display: "flex", justifyContent: "center" }}>
          <Link
            to={"/blog"}
            sx={{
              margin: `auto`,
              textAlign: `center`,
              color: `secondary`,
              textDecoration: `none`,
              fontSize: 20,
              p: ".5em 1.5em",
              border: "1px solid",
              borderColor: "secondary",
              borderRadius: "20px",
              px: "14px",
              py: 2,
              ":hover": {
                color: lighten("secondary", 0.2),
                borderColor: lighten("secondary", 0.2),
              },
            }}
          >
            See All
          </Link>
        </section>
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    mostRecent: allMdx(
      limit: 4
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
    mostPopular: allMdx(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: {
          publish: { eq: "yes" }
          template: { eq: "post" }
          popular: { eq: true }
        }
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
