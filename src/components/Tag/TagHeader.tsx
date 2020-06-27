import React from "react";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import TagButton from "./TagButton";

interface TagHeaderProps {
  tag: string;
}

export default function TagHeader({ tag }: TagHeaderProps) {
  return (
    <Styled
      sx={{
        display: `flex`,
        textAlign: `center`,
        alignItems: `baseline`,
        color: `primary`,
        my: 4,
        mx: `auto`,
      }}
    >
      <div
        sx={{
          mx: `auto`,
          display: `flex`,
          textAlign: `center`,
          flexDirection: "column",
        }}
      >
        <TagButton tag={tag} />
      </div>
    </Styled>
  );
}
