import React, { Component } from "react";
import { DiscussionEmbed } from "disqus-react";
import { PostNode } from "../Post/Post.model";

export default function Disqus({ postNode }: { postNode: PostNode }) {
  const disqusConfig = {
    shortname: process.env.disqusShortName as string,
    config: {
      url: "",
      identifier: postNode.fields.slug,
      title: postNode.frontmatter.title,
    },
  };

  return <DiscussionEmbed {...disqusConfig} />;
}
