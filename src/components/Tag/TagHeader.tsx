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
        <Styled.h2 sx={{ fontSize: `10`, mr: 3 }}>{tag}</Styled.h2>
        <TagButton tag={tag} />
      </div>
    </Styled>
  );
}
