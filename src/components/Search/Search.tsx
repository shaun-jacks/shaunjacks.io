import React, { useState, useMemo, useRef } from "react";
import { InstantSearch, Index, Hits, PoweredBy } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import PostHit from "./PostHit";
import InputSearch from "./InputSearch";
import CustomStateResults from "./CustomStateResults";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import SearchIcon from "./SearchIcon";
import { mediaQueries } from "../../gatsby-plugin-theme-ui";

export default function Search() {
  const [focus, setFocus] = React.useState(false);
  const [query, setQuery] = useState(``);

  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID as string,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY as string
      ),
    []
  );
  return (
    <div sx={{ zIndex: 999 }}>
      <InstantSearch
        searchClient={searchClient}
        indexName={"Posts"}
        onSearchStateChange={({ query }: { query: string }) => setQuery(query)}
      >
        <SearchIcon setFocus={setFocus} />
        {focus && (
          <div
            sx={{
              position: "fixed",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              overflow: "auto",
              backgroundColor: "rgba(0,0,0,0.4)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": { cursor: "auto" },
            }}
          >
            <div
              sx={{
                borderRadius: "10px",
                bg: "panelBackground",
                margin: "auto",
                mx: 3,
                mb: 5,
                p: 3,
                width: "75%",
                height: "75%",
                boxShadow: `0px 2px 0px 0px rgba(0, 0, 0, 0.2)`,
                span: {
                  textDecoration: "none",
                },
                mark: {
                  bg: "primary",
                  color: "background",
                },
                a: {
                  textDecoration: "none",
                },
                ul: { listStyle: "none" },
              }}
            >
              <div
                sx={{
                  maxWidth: "900px",
                  margin: "auto",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  px: 2,
                }}
              >
                <InputSearch
                  onFocus={() => setFocus(true)}
                  focus={focus}
                  setFocus={setFocus}
                />
                <div
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Styled.h2>Posts</Styled.h2>
                  <CustomStateResults />
                </div>
                <span
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "0.6em",
                    mr: 4,
                    a: {
                      ml: 1,
                      color: "primary",
                    },
                  }}
                >
                  Search Powered by{` `}
                  <a href="https://algolia.com">Algolia</a>
                </span>
                <div
                  sx={{
                    overflow: "auto",
                    maxHeight: "700px",
                    ul: { pl: 0 },
                  }}
                >
                  <Hits hitComponent={PostHit} />
                </div>
                <div sx={{ flex: 1 }}></div>
                <div
                  sx={{
                    color: `text`,
                    textAlign: "center",
                    m: "auto",
                    [mediaQueries.lg]: {
                      width: "75%",
                    },
                    textDecoration: `none`,
                    boxSizing: `content-box`,
                    fontSize: "14px",
                    border: "1px solid",
                    borderColor: "text",
                    borderRadius: "20px",
                    px: "12px",
                    py: ".4rem",
                    "&:hover": {
                      cursor: "pointer",
                      color: "primary",
                      borderColor: "primary",
                    },
                  }}
                  onClick={() => setFocus(false)}
                >
                  Close
                </div>
              </div>
            </div>
          </div>
        )}
      </InstantSearch>
    </div>
  );
}
