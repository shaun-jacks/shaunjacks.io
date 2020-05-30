import React, { Component } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import { Helmet } from "react-helmet";
import { PostNode } from "../components/Post/Post.model";

interface PageTemplateMdx extends PostNode {
  body: string;
}

interface PageTemplateProps {
  data: {
    mdx: PageTemplateMdx;
  };
}

export default function PageTemplate({
  data: { mdx: pageNode },
}: PageTemplateProps) {
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
