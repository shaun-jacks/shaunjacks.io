import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import DataSvg from "../../images/undraw_visual_data_b1wx.svg";
import SoftwareSvg from "../../images/undraw_code_review_l1q9.svg";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export const CategorySvgMap: {
  [key: string]: { name: string; image: string };
} = {
  Software: {
    name: "Software",
    image: SoftwareSvg,
  },
  Data: {
    name: "Data",
    image: DataSvg,
  },
};

export interface CategoryButtonProps {
  category: string;
}

export default function CategoryButton({
  category,
}: CategoryButtonProps): JSX.Element | null {
  return CategorySvgMap.hasOwnProperty(category) ? (
    <Link
      to={`/categories/${_.kebabCase(category)}/`}
      sx={{
        m: 2,
        textDecoration: "none",
        color: "text",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid",
        borderColor: "text",
        borderRadius: "20px",
        mr: "12px",
        px: "12px",
        py: ".4rem",
        "&:hover": {
          cursor: "pointer",
          color: "primary",
          borderColor: "primary",
        },
      }}
    >
      <Styled.h3>{CategorySvgMap[category].name}</Styled.h3>
      <img width="150" height="150" src={CategorySvgMap[category].image} />
    </Link>
  ) : null;
}
