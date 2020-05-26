import React from "react";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export default function TagHeader({ tag }) {
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
          alignItems: `baseline`,
        }}
      >
        <Styled.h2 sx={{ fontSize: `10`, mr: 3 }}>
          Article(s) tagged as
        </Styled.h2>
        <Styled.h3
          sx={{
            color: `text`,
            mr: 1,
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.5)`,
            p: `5px`,
            borderRadius: `4px`,
            boxSizing: `content-box`,
          }}
        >
          {tag}
        </Styled.h3>
      </div>
    </Styled>
  );
}
