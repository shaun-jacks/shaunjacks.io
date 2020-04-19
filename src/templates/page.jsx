import React, { Component } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Helmet from "react-helmet";

class PageTemplate extends Component {
  render() {
    const pageNode = this.props.data.mdx;
    debugger;
    return (
      <Layout>
        <Helmet>
          <title>{`${pageNode.frontmatter.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <div>
          <p>Last updated {pageNode.frontmatter.date}</p>
          <MDXRenderer>{pageNode.body}</MDXRenderer>
        </div>
      </Layout>
    );
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query PagePostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
