import React, { useEffect } from "react";
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
import TocDesktop from "../components/Toc/TocDesktop";
import TableOfContents from "../components/Toc/TableOfContents";
import TocMobile from "../components/Toc/TocMobile";
import { mediaQueries } from "../gatsby-plugin-theme-ui";

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
  const commentBox = React.createRef<JSX.Element>();

  useEffect(() => {
    const commentScript = document.createElement("script");
    const theme =
      typeof window !== "undefined" &&
      localStorage.getItem("theme-ui-color-mode") === "default"
        ? "github-dark"
        : "github-light";
    commentScript.async = true;
    commentScript.src = "https://utteranc.es/client.js";
    commentScript.setAttribute("repo", "shaun-jacks/comments");
    commentScript.setAttribute("issue-term", "pathname");
    commentScript.setAttribute("id", "utterances");
    commentScript.setAttribute("theme", theme);
    commentScript.setAttribute("crossorigin", "anonymous");
    if (commentBox && commentBox.current) {
      (commentBox as any).current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  }, []); // eslint-disable-line

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div
        sx={{
          px: 3,
          maxWidth: "1200px",
          m: "auto",
          [mediaQueries.lg]: {
            display: "grid",
            gridTemplateColumns: "1fr 261px",
          },
        }}
      >
        <div
          sx={{
            maxWidth: "midContainer",
            m: "auto",
            ".gatsby-resp-image-figcaption": {
              textAlign: "center",
              color: "text",
            },
            ".header-link": {
              fill: "primary",
            },
          }}
        >
          <Styled.h1 sx={{ mb: 0, fontSize: 60 }}>{post.title}</Styled.h1>
          <PostTemplateHeader post={post} />
          {post.cover && (
            <Img
              sx={{ mt: 3, overflow: "scroll", minWidth: 0 }}
              fluid={post.cover.childImageSharp.fluid}
            />
          )}
          <MDXRenderer>{postNode.body}</MDXRenderer>
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
            <div sx={{ width: "100%" }} id="comments">
              <h2>Comments</h2>
              <div ref={commentBox} className="comments" />
            </div>
          </div>
        </div>
        <TocMobile postNode={postNode} slug={slug}></TocMobile>
        <TocDesktop>
          <TableOfContents
            items={postNode.tableOfContents?.items}
            depth={2}
            location={slug}
          />
        </TocDesktop>
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
      tableOfContents(maxDepth: 3)
      fields {
        slug
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
