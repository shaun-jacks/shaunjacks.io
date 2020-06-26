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
            <div
              sx={{
                ml: 2,
                "&:hover": {
                  cursor: "pointer",
                  color: "primary",
                },
              }}
            >
              <IconContext.Provider value={{ size: "1.25rem" }}>
                <AiFillCloseCircle onClick={() => setFocus(false)} />
              </IconContext.Provider>
            </div>
          )}
        </div>
      ) : (
        <IconContext.Provider value={{ size: "1.25rem" }}>
          <div
            sx={{
              p: 2,
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "muted",
              },
            }}
          >
            <FaSearch onClick={() => setFocus(true)} />
          </div>
        </IconContext.Provider>
      )}
    </Styled>
  )
);
