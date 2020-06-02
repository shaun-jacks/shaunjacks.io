import React, { Component } from "react";
import { DiscussionEmbed } from "disqus-react";
import { PostNode } from "../Post/Post.model";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

export default function Disqus({ postNode }: { postNode: PostNode }) {
  const disqusConfig = {
    shortname: process.env.DISQUS_SHORTNAME as string,
    config: {
      url: "",
      identifier: postNode.fields.slug,
      title: postNode.frontmatter.title,
    },
  };

  return <DiscussionEmbed {...disqusConfig} />;
}
