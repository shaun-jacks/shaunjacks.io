import React, { Component } from "react";
import { DiscussionEmbed } from "disqus-react";

export default function Disqus({ postNode }) {
  const disqusConfig = {
    shortname: process.env.disqusShortName,
    config: {
      identifier: postNode.fields.slug,
      title: postNode.frontmatter.title,
    },
  };

  return <DiscussionEmbed {...disqusConfig} />;
}
