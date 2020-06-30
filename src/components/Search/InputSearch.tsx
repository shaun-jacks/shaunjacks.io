/** @jsx jsx */
import React from "react";
import { Styled, jsx } from "theme-ui";
import { AiOutlineClose } from "react-icons/ai";
import { connectSearchBox } from "react-instantsearch-dom";
import { IconContext } from "react-icons";

interface InputSearchProps {
  refine: any;
  focus: boolean;
  setFocus: (value?: boolean) => void;
}

export default connectSearchBox(
  ({ refine, focus, setFocus }: InputSearchProps) => (
    <Styled.div
      sx={{
        zIndex: 999,
        m: "auto",
        width: "100%",
        p: 3,
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        input: {
          outline: "none",
          borderRight: "none",
          borderTop: "none",
          borderLeft: "none",
          borderBottom: (t: any) => `2px solid ${t.colors.primary}`,
          fontSize: "1em",
          padding: 2,
          borderRadius: ".2em",
          color: "primary",
          width: "100%",
          bg: "muted",
        },
      }}
    >
      <div sx={{ mr: 4, flex: 1 }}>
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
      </div>
      <div
        sx={{
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "muted",
          },
          p: 2,
          color: "primary",
          display: "flex",
          m: "auto",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setFocus(false)}
      >
        <IconContext.Provider value={{ size: "1.25rem" }}>
          <AiOutlineClose />
        </IconContext.Provider>
      </div>
    </Styled.div>
  )
);
