import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import SimplePostListing from "../components/SimplePostListing";
import SEO from "../components/SEO/SEO";
import BigAvatar from "../components/Avatar/BigAvatar";
import config from "../../data/SiteConfig";
import AllCategories from "../components/AllCategories";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges;
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
        <section
          sx={{
            my: `40px`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Styled.h1 sx={{ color: "text" }}>Most recent posts</Styled.h1>
          <SimplePostListing postEdges={postEdges} />
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
      limit: 5
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
  }
`;
