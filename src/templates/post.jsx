import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import "katex/dist/katex.min.css";
import { Styled, jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import PostHeaderLong from "../components/Post/PostHeaderLong";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import SmallAvatar from "../components/Avatar/SmallAvatar";

//if you want to use Discus
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.mdx;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    //transforming my data from post into and Array so that I can loop through it
    const postNodeWip = [];
    postNodeWip.push(postNode);

    const postWip = [];
    postNodeWip.forEach((post) => {
      postWip.push({
        path: slug,
        category: post.frontmatter.category,
        cover: post.frontmatter.cover,
        timeToRead: post.timeToRead,
        tags: post.frontmatter.tags,
        date: post.fields.date,
      });
    });

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div
          sx={{
            maxWidth: "700px",
            m: "auto",
            ".gatsby-resp-image-figcaption": {
              textAlign: "center",
              color: "text",
            },
          }}
        >
          <Styled.h1 sx={{ mb: 0, fontSize: 60 }}>{post.title}</Styled.h1>
          <PostHeaderLong post={postWip[0]} />
          {post.cover && (
            <Img sx={{ mt: 3 }} fluid={post.cover.childImageSharp.fluid} />
          )}
          <MDXRenderer>{postNode.body}</MDXRenderer>
          <div sx={{ mt: "40px" }}>
            <SmallAvatar />
          </div>
          {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
          {/* <UserInfo config={config} /> */}
          <Disqus postNode={postNode} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      rawBody
      body
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date
        category
        tags
      }
      fields {
        slug
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
