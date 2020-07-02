import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

interface TagButtonProps {
  tag: string;
}

export default function TagButton({ tag }: TagButtonProps) {
  return (
    <Link
      sx={{
        variant: "buttons.default",
      }}
      to={`/tags/${_.kebabCase(tag)}/`}
    >
      {tag}
    </Link>
  );
}
