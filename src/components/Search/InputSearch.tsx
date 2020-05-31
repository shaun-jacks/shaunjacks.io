import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { InputStyles } from "./styles";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

interface InputSearchProps {
  refine: any;
  focus: boolean;
  setFocus: (value?: boolean) => void;
}

export default connectSearchBox(
  ({ refine, focus, setFocus }: InputSearchProps) => (
    <Styled sx={InputStyles(focus)}>
      {focus ? (
        <form>
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => refine(e.target.value)}
            autoFocus
          />
        </form>
      ) : (
        <IconContext.Provider value={{ size: "1.25rem" }}>
          <FaSearch onClick={() => setFocus(true)} />
        </IconContext.Provider>
      )}
    </Styled>
  )
);
