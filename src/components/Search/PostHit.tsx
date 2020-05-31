import React from "react";
import { Link } from "gatsby";
import { Highlight, Snippet } from "react-instantsearch-dom";
import { PostHitHeader } from "./styles";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

interface PostHitProps {
  hit: any;
}

export default function PostHit({ hit }: PostHitProps) {
  return (
    <Styled key={hit.slug}>
      <Link to={hit.slug}>
        <Styled.h1 sx={PostHitHeader}>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </Styled.h1>
      </Link>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <section>
          <Styled.p sx={{ m: 0, fontSize: "14px" }}>
            <Highlight attribute="date" hit={hit} tagName="mark" />
          </Styled.p>
        </section>
        <section>
          <Styled.p sx={{ m: 0, fontSize: "12px" }}>
            {hit.tags.map((tag: string, index: number) => (
              <React.Fragment key={tag}>
                {index > 0 && `, `}
                {tag}
              </React.Fragment>
            ))}
          </Styled.p>
        </section>
      </div>
      <Styled.p sx={{ fontSize: "12px", mt: 1 }}>
        <Snippet attribute="excerpt" hit={hit} tagName="mark" />
      </Styled.p>
    </Styled>
  );
}
