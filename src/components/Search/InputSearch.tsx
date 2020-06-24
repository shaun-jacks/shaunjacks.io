import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { InputStyles } from "./styles";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { AiFillCloseCircle } from "react-icons/ai";

interface InputSearchProps {
  refine: any;
  focus: boolean;
  setFocus: (value?: boolean) => void;
}

export default connectSearchBox(
  ({ refine, focus, setFocus }: InputSearchProps) => (
    <Styled sx={InputStyles(focus)}>
      {focus ? (
        <div sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => refine(e.target.value)}
              autoFocus
            />
          </form>
          {focus && (
            <div sx={{ ml: 2, "&:hover": { cursor: "pointer" } }}>
              <IconContext.Provider value={{ size: "1.25rem" }}>
                <AiFillCloseCircle onClick={() => setFocus(false)} />
              </IconContext.Provider>
            </div>
          )}
        </div>
      ) : (
        <div
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <IconContext.Provider value={{ size: "1.25rem" }}>
            <FaSearch onClick={() => setFocus(true)} />
          </IconContext.Provider>
        </div>
      )}
    </Styled>
  )
);
