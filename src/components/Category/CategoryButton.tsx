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
        variant: "buttons.default",
        m: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Styled.h3>{CategorySvgMap[category].name}</Styled.h3>
      <img width="150" height="150" src={CategorySvgMap[category].image} />
    </Link>
  ) : null;
}
