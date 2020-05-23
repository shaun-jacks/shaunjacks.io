import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import SimplePostListing from "../components/SimplePostListing";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO/SEO";
import BigAvatar from "../components/Avatar/BigAvatar";
import config from "../../data/SiteConfig";
import AllCategories from "../components/AllCategories";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

class Index extends React.Component {
  render() {
    const horizontalMostRecentEdges = this.props.data.horizontalMostRecent
      .edges;
    const horizontalMostPopular = this.props.data.horizontalMostPopular.edges;
    const verticalMostRecentEdges = this.props.data.verticalMostRecent.edges;
    const verticalMostPopularEdges = this.props.data.verticalMostPopular.edges;
    const { userLinks } = config;

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
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
            <a
              href="https://shaunjacks.substack.com"
              sx={{
                padding: "1em",
                borderRadius: ".5rem",
                textDecoration: "none",
                color: "background",
                cursor: "pointer",
                outline: "none",
                backgroundColor: "primary",
                border: "3px solid text",
                borderColor: "primary",
                borderRadius: "5px",
                borderWidth: "1px",
                padding: "4px 11px",
                fontSize: "16px",
                boxShadow: "0 2px 0 rgba(0,0,0,.045)",
                transition: "all .3s ease",
                "&:focus, &:hover": {
                  outline: "none",
                  borderColor: lighten("primary", 0.2),
                  backgroundColor: lighten("primary", 0.2),
                },
              }}
            >
              <Styled.h3 sx={{ m: 0, p: ".5em 1.5em", color: "background" }}>
                Subscribe
              </Styled.h3>
            </a>
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
          <SimplePostListing postEdges={verticalMostPopularEdges} />
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
          <SimplePostListing postEdges={verticalMostRecentEdges} />
        </section>
        <section sx={{ display: "flex", justifyContent: "center" }}>
          <Styled
            as={Link}
            to={"/blog"}
            sx={{
              margin: `auto`,
              textAlign: `center`,
              color: `primary`,
              border: `1px solid`,
              borderRadius: 3,
              borderColor: `panelBackground`,
              textDecoration: `none`,
              transition: "all .3s ease",
              fontSize: 20,
              p: ".5em 1.5em",
              ":hover": {
                bg: lighten("background", 0.1),
              },
            }}
          >
            More posts...
          </Styled>
        </section>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    verticalMostRecent: allMdx(
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
                fixed(width: 256, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
          }
        }
      }
    }
    verticalMostPopular: allMdx(
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
                fixed(width: 256, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
          }
        }
      }
    }
    horizontalMostRecent: allMdx(
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
    horizontalMostPopular: allMdx(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: {
          popular: { eq: true }
          publish: { eq: "yes" }
          template: { eq: "post" }
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
