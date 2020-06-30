/** @jsx jsx */
import React from "react";
import { Styled, jsx } from "theme-ui";
import { IconContext } from "react-icons";
import { AiOutlineClose, AiOutlineUnorderedList } from "react-icons/ai";
import { mediaQueries } from "../../gatsby-plugin-theme-ui";

interface NavMobileIconProps {
  sideDrawerOpen: boolean;
  setSideDrawerOpen: (val: boolean) => void;
}
export default function TocMobileIcon({
  sideDrawerOpen,
  setSideDrawerOpen,
}: NavMobileIconProps) {
  return (
    <div
      sx={{
        position: "fixed",
        bottom: "44px",
        right: "20px",
        bg: "panelBackground",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        color: "primary",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
        zIndex: 1,
        [mediaQueries.lg]: {
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
            <AiOutlineUnorderedList />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ size: "2em" }}>
            <AiOutlineClose />
          </IconContext.Provider>
        )}
      </div>
      {""}
    </div>
  );
}
