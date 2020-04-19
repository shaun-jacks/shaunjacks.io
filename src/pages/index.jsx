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

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges;
    const horizontalMostRecentEdges = this.props.data.horizontalMostRecent
      .edges;
    const horizontalMostPopular = this.props.data.horizontalMostPopular.edges;
    const { userLinks } = config;

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <section>
          <BigAvatar />
        </section>
        <section
          sx={{
            my: `40px`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Styled.h1 sx={{ color: "text" }}>I write about</Styled.h1>
          <AllCategories />
        </section>
        {/* <section
          sx={{
            my: `40px`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Styled.h1 sx={{ color: "text" }}>Most recent posts</Styled.h1>
          <SimplePostListing postEdges={postEdges} />
        </section> */}
        <section
          sx={{
            my: `40px`,
            display: "flex",
            p: 2,
            flexDirection: "column"
            // "@media screen and (min-width: 40em)": {
            //   width: "50%"
            // }
          }}
        >
          <Styled.h1 sx={{ color: "text" }}>Most recent</Styled.h1>
          <PostListing postEdges={horizontalMostRecentEdges} />
        </section>
        <section
          sx={{
            my: `40px`,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Styled.h1 sx={{ color: "text" }}>Most popular</Styled.h1>
          <PostListing postEdges={horizontalMostPopular} />
        </section>
        <section>
          <Styled
            as={Link}
            to={"/blog"}
            sx={{
              margin: `auto`,
              textAlign: `center`,
              color: `primary`,
              borderBottom: `solid 3px`,
              textDecoration: `none`,
              fontSize: 26,
              ":hover": {
                bg: `muted`,
                p: 1,
                borderRadius: `5px`
              }
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
    allMdx(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { publish: { eq: "yes" } } }
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
                fixed(width: 256, height: 200) {
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
      filter: { frontmatter: { publish: { eq: "yes" } } }
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
      filter: { frontmatter: { popular: { eq: true } } }
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
