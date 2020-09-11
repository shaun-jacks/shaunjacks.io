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
import avatar from "../images/shaun-avatar-025x.svg";
import { mediaQueries } from "../gatsby-plugin-theme-ui";

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
              [mediaQueries.sm]: {
                display: "none",
              },
            }}
          >
            <Styled.h1 sx={{ m: ".5em" }}>Hi! I'm Shaun</Styled.h1>
            <img
              sx={{
                maxWidth: "200px",
                maxHeight: "200px",
              }}
              src={"/shaun-avatar-05x.png"}
            />
            <Styled.p sx={{ textAlign: "center" }}>
              I aim to provide a creative learning hub for learning about the
              multiverse of computer science, ranging from data science and
              software engineering.
            </Styled.p>
            <Styled.p sx={{ textAlign: "center" }}>
              I have experience in modern web development and health-based data
              science.
            </Styled.p>
          </div>
          <div
            sx={{
              display: "none",
              p: "2em",
              [mediaQueries.sm]: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <div sx={{ maxWidth: "300px" }}>
              <Styled.h1 sx={{ m: ".5em" }}>Hi! I'm Shaun</Styled.h1>
              <Styled.p>
                I aim to provide a creative learning hub for learning about the
                multiverse of computer science, ranging from data science and
                software engineering.
              </Styled.p>
              <Styled.p>
                I have experience in modern web development and health-based
                data science.
              </Styled.p>
            </div>
            <img
              sx={{
                maxWidth: "200px",
                maxHeight: "200px",
              }}
              src={"/shaun-avatar-05x.png"}
            />
          </div>
        </section>
        {/* <section
          sx={{
            my: `40px`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Styled.h1 sx={{ mt: 0, color: "text" }}>Most popular</Styled.h1>
          <PostListing postEdges={mostPopular.edges} />
        </section> */}
        <section
          sx={{
            my: `40px`,
            display: "flex",
            flexDirection: "column",
            m: "auto",
            maxWidth: "900px"
          }}
        >
          <Styled.h1 sx={{ mt: 0, ml: 3, color: "text" }}>Most recent</Styled.h1>
          <PostListing postEdges={mostRecent.edges} />
        </section>
        <section sx={{ display: "flex", justifyContent: "center" }}>
          <Link
            to={"/blog"}
            sx={{
              variant: "buttons.default",
              borderColor: "secondary",
              color: "secondary",
              m: 0,
              ":hover": {
                color: lighten("secondary", ".2"),
                borderColor: lighten("secondary", ".2"),
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
