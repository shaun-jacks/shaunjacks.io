import React, { useState, useEffect, createRef, useMemo } from "react";
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from "react-instantsearch-dom";
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

export default function Search() {
  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID as string,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY as string
      ),
    []
  );
  return (
    <Styled>
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
              top: "45px",
              left: "0",
              width: "100vw",
              height: "calc(100vh - 45px)",
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
    </Styled>
  );
}
