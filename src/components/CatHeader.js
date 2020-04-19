import React from "react";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const CatHeader = props => {
  const { category } = props;
  return (
    <Styled
      sx={{
        display: `flex`,
        textAlign: `center`,
        alignItems: `baseline`,
        color: `primary`,
        mx: `auto`
      }}
    >
      <div
        sx={{
          mx: `auto`,
          display: `flex`,
          textAlign: `center`,
          alignItems: `baseline`
        }}
      >
        <Styled.h2 sx={{ color: `primary`, fontSize: `10`, mr: 2 }}>
          Article(s) category as
        </Styled.h2>
        <Styled.h3
          sx={{
            color: `primary`,
            textDecoration: `none`,
            border: `solid 1px`,
            boxSizing: `content-box`,
            display: `inline-block`,
            px: `4px`,
            borderRadius: `5px`,
            p: 1,
            mr: 2
          }}
        >
          {category}
        </Styled.h3>
      </div>
    </Styled>
  );
};

export default CatHeader;
