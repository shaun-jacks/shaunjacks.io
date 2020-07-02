import React, { useRef, useState, useEffect } from "react";
import { throttle } from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";

const accumulateOffsetTop = (el: any, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }
  return totalOffset;
};

export interface TocProps {
  headingSelector?: string | string[];
  getTitle?: (val: Node) => string;
  getDepth?: (val: Node) => number;
  getActive?: boolean;
  throttleTime?: number;
  tocTitle?: string;
}

export default function Toc({
  headingSelector,
  getTitle,
  getDepth,
  getActive,
  ...rest
}: TocProps) {
  const { throttleTime = 200, tocTitle = `Contents` } = rest;
  const [headings, setHeadings] = useState<{
    titles: any[];
    nodes: any[];
    minDepth: number;
  }>({
    titles: [],
    nodes: [],
    minDepth: 0,
  });
  // Controls which heading is currently highlighted as active.
  const [active, setActive] = useState<number | void>();
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("main h1, main h2"));
    const titles = nodes.map((node: any) => ({
      title: node.innerText,
      depth: Number(node.nodeName[1]),
    }));
    // Compute the minimum heading depth. Will be subtracted from each heading's
    // depth to determine the indentation of that heading in the ToC.
    const minDepth = Math.min(...titles.map((h) => h.depth));
    setHeadings({ titles, nodes, minDepth });
  }, [headingSelector, getTitle, getDepth]);

  // Add scroll event listener to update currently active heading.
  useEffect(() => {
    // Throttling the scrollHandler saves computation and hence battery life.
    const scrollHandler = throttle(() => {
      const { titles, nodes } = headings;
      // Offsets need to be recomputed inside scrollHandler because
      // lazily-loaded content increases offsets as user scrolls down.
      const offsets = nodes.map((el) => accumulateOffsetTop(el));
      const activeIndex = offsets.findIndex(
        (offset) => offset > window.scrollY + 0.8 * window.innerHeight
      );
      setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1);
    }, throttleTime);

    window.addEventListener(`scroll`, scrollHandler);
    return () => window.removeEventListener(`scroll`, scrollHandler);
  }, [headings]);

  // Every time we open the mobile toc, get active elements
  useEffect(() => {
    const { titles, nodes } = headings;
    const offsets = nodes.map((el) => accumulateOffsetTop(el));
    const activeIndex = offsets.findIndex(
      (offset) => offset > window.scrollY + 0.8 * window.innerHeight
    );
    setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1);
  }, [headings, getActive]);

  return (
    <Styled.div
      sx={{
        px: 2,
        py: 2,
      }}
    >
      <Styled.h3>{`Contents`}</Styled.h3>
      <nav>
        {headings.titles.map(({ title, depth }, index) => {
          return (
            <Styled.p
              key={title}
              sx={{
                cursor: "pointer",
                color: "text",
                "&.active": {
                  color: "primary",
                  fontWeight: "bold",
                },
                display: "block",
                ml: `${depth - 1 + `em`}`,
              }}
              className={active === index ? "active" : ""}
              onClick={(event: any) => {
                event.preventDefault();
                headings.nodes[index].scrollIntoView({
                  behavior: `smooth`,
                  block: `center`,
                });
              }}
            >
              {title}
            </Styled.p>
          );
        })}
      </nav>
    </Styled.div>
  );
}
