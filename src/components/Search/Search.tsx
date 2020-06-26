import React, { useState, useMemo, useRef } from "react";
import { InstantSearch, Index, Hits, PoweredBy } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import {
  HitsWrapper,
  HitsBackgroundOverlay,
  HitsPanelBackground,
} from "./styles";
import PostHit from "./PostHit";
import InputSearch from "./InputSearch";
import CustomStateResults from "./CustomStateResults";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

interface SearchProps {
  setMobileNavOpen?: (val: boolean) => void;
  setFocus: (val: boolean) => void;
  focus: boolean;
}

export default function Search({
  setMobileNavOpen = (val) => {},
  focus,
  setFocus,
}: SearchProps) {
  const ref = useRef<HTMLDivElement>();
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
    <div
      sx={focus ? { width: "100%" } : {}}
      onClick={() => setMobileNavOpen(false)}
    >
      <InstantSearch
        searchClient={searchClient}
        indexName={"Posts"}
        onSearchStateChange={({ query }: { query: string }) => setQuery(query)}
      >
        <InputSearch
          onFocus={() => setFocus(true)}
          focus={focus}
          setFocus={setFocus}
        />
        {focus && (
          <div
            sx={{
              position: "absolute",
              top: "56px",
              left: "0",
              width: "100vw",
              height: "calc(100vh - 56px)",
              display: "flex",
              flexDirection: "column",
              "&:hover": { cursor: "auto" },
            }}
          >
            <div sx={HitsWrapper}>
              <div sx={HitsPanelBackground}>
                <div
                  sx={{
                    px: "40px",
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
                <Hits hitComponent={PostHit} />
              </div>
            </div>
            <div
              onClick={() => setFocus(false)}
              sx={HitsBackgroundOverlay}
            ></div>
          </div>
        )}
      </InstantSearch>
    </div>
  );
}
