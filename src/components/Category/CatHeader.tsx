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
        my: 4,
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
        <CategoryButton category={category} />
      </div>
    </Styled>
  );
}
