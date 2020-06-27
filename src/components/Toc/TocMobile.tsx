import React, { useState } from "react";
import _ from "lodash";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { IconContext } from "react-icons";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import TocSideDrawer from "./TocSideDrawer";
import Toc from ".";

export default function TocMobile({ children }: { children?: JSX.Element }) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  return (
    <React.Fragment>
      {sideDrawerOpen && (
        <TocSideDrawer>
          <div sx={{ pl: 2 }}>
            <Toc getActive={sideDrawerOpen} />
          </div>
        </TocSideDrawer>
      )}
      <div
        sx={{
          position: "fixed",
          bottom: "44px",
          right: "20px",
          backgroundColor: "panelBackground",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          color: "primary",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
          zIndex: 3,
          "@media screen and (min-width: 920px)": {
            display: "none",
          },
        }}
      >
        <div
          sx={{
            display: "flex",
            m: "auto",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={(event: any) => {
            event.preventDefault();
            setSideDrawerOpen(!sideDrawerOpen);
          }}
        >
          {!sideDrawerOpen ? (
            <IconContext.Provider value={{ size: "2em" }}>
              <BsCodeSlash />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ size: "2em" }}>
              <AiOutlineClose />
            </IconContext.Provider>
          )}
        </div>
        {""}
      </div>
    </React.Fragment>
  );
}
