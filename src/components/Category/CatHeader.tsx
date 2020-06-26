import React from "react";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import CategoryButton from "./CategoryButton";

interface CatHeaderProps {
  category: string;
}

export default function CatHeader({ category }: CatHeaderProps) {
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
          flexDirection: "column",
        }}
      >
        <Styled.h1 sx={{ color: `primary`, fontSize: `10`, mr: 2 }}>
          {category}
        </Styled.h1>
        <CategoryButton category={category} />
      </div>
    </Styled>
  );
}
