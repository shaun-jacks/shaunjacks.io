import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";
import { lighten } from "@theme-ui/color";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function MobileSearchIcon({
  setFocus,
}: {
  setFocus: (val: boolean) => void;
}) {
  return (
    <div sx={{ marginY: "1em" }}>
<IconContext.Provider value={{ size: "1.25rem" }}>
      <div
        sx={{
          zIndex: 999,
          borderRadius: "10px",
          cursor: "pointer",
          p: 2,
          "&:hover": {
            bg: "muted",
          },
        }}
        onClick={() => setFocus(true)}
      >
        <FaSearch />
      </div>
    </IconContext.Provider>
    </div>
  );
}
