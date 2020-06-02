import React, { Component } from "react";
import { DiscussionEmbed } from "disqus-react";
import { PostNode } from "../Post/Post.model";
import siteConfig from "../../../data/SiteConfig";
import urljoin from "url-join";

export default function Disqus({ postNode }: { postNode: PostNode }) {
  const disqusConfig = {
    config: {
      url: urljoin(
        siteConfig.siteUrl,
        siteConfig.pathPrefix,
        postNode.fields.slug
      ),
      identifier: postNode.fields.slug,
      title: postNode.frontmatter.title,
    },
  };

  return <DiscussionEmbed {...disqusConfig} />;
}
