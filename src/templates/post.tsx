import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import "katex/dist/katex.min.css";
import { Styled, jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import SmallAvatar from "../components/Avatar/SmallAvatar";
import { PostNode, PostFrontmatter, Post } from "../components/Post/Post.model";
import SubscribeButton from "../components/Buttons/Subscribe";
import AvatarLinks from "../components/Avatar/AvatarLinks";
import Cookies from "js-cookie";
import PostTemplateHeader from "../components/Post/PostTemplateHeader";
import Toc from "../components/Toc";

interface PostTemplateFrontmatter extends PostFrontmatter {
  id?: string;
  category_id?: string;
}

interface PostTemplateNode extends PostNode {
  frontmatter: PostTemplateFrontmatter;
  body: string;
}

interface PostTemplateProps {
  pageContext: {
    slug: string;
  };
  data: {
    mdx: PostTemplateNode;
  };
}

export default function PostTemplate({
  pageContext: { slug },
  data: { mdx: postNode },
}: PostTemplateProps) {
  const post: Post = {
    id: postNode.frontmatter.id ? postNode.frontmatter.id : slug,
    categoryId: postNode.frontmatter.category_id
      ? postNode.frontmatter.category_id
      : config.postDefaultCategoryID,
    path: slug,
    category: postNode.frontmatter.category,
    cover: postNode.frontmatter.cover,
    timeToRead: postNode.timeToRead,
    tags: postNode.frontmatter.tags,
    date: postNode.fields.date,
    title: postNode.frontmatter.title,
    excerpt: postNode.excerpt,
  };
  const CookiesEnabled = Cookies.get("CookieConsent");

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div
        sx={{
          maxWidth: "1200px",
          m: "auto",
          "@media screen and (min-width: 920px)": {
            display: "grid",
            gridTemplateColumns: "1fr 200px",
          },
          "@media screen and (max-width: 921px)": {
            ".wide-toc": {
              display: "none",
            },
          },
        }}
      >
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
          <PostTemplateHeader post={post} />
          {post.cover && (
            <Img sx={{ mt: 3 }} fluid={post.cover.childImageSharp.fluid} />
          )}
          <main>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </main>
          <div
            sx={{
              mt: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "2em",
            }}
          >
            <SmallAvatar />
            <SubscribeButton />
            <div sx={{ mt: 4 }}>
              <AvatarLinks />
            </div>
          </div>
        </div>
        <div className="wide-toc">
          <div
            sx={{
              position: "sticky",
              top: 75,
              overflow: "scroll",
              mr: 3,
              ml: 2,
            }}
          >
            {" "}
            <Toc />
          </div>
        </div>
      </div>
    </Layout>
  );
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
