import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import "katex/dist/katex.min.css";
import { Styled, jsx } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import PostHeader from "../components/Post/PostHeader";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import SmallAvatar from "../components/Avatar/SmallAvatar";
import Disqus from "../components/Disqus/Disqus";
import {
  PostEdge,
  PostNode,
  PostFrontmatter,
  Post,
} from "../components/Post/Post.model";

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

  const postWip: Post[] = [];
  postNodeWip.forEach((post) => {
    postWip.push({
      path: slug,
      category: post.frontmatter.category,
      cover: post.frontmatter.cover,
      timeToRead: post.timeToRead,
      tags: post.frontmatter.tags,
      date: post.fields.date,
      title: post.frontmatter.title,
      excerpt: post.excerpt,
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
        <PostHeader post={postWip[0]} />
        {post.cover && (
          <Img sx={{ mt: 3 }} fluid={post.cover.childImageSharp.fluid} />
        )}
        <MDXRenderer>{postNode.body}</MDXRenderer>
        <div sx={{ mt: "40px" }}>
          <SmallAvatar />
        </div>
        <Disqus postNode={postNode} />
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
