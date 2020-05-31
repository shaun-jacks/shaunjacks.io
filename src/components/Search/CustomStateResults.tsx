import React from "react";
import { connectStateResults } from "react-instantsearch-dom";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const StateResults = ({ searchResults }: { searchResults: any }) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  const nbHits = searchResults && searchResults.nbHits;

  return (
    <div>
      <div hidden={!hasResults}>
        {nbHits} result{nbHits === 1 ? "" : "s"}
      </div>
      <div hidden={hasResults}>No results</div>
    </div>
  );
};
export default connectStateResults(StateResults);
