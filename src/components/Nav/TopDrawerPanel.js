import React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

class TopDrawerPanel extends React.Component {
  render() {
    const { isOpen } = this.props;

    return (
      <div
        sx={{
          position: "relative",
          width: "100%",
          height: "85%",
          backgroundColor: "panelBackground",
          color: "background",
          zIndex: 11,
          transition: "all .2s ease",
          transformOrigin: "top",
          transform: isOpen ? "scaleY(1)" : "scaleY(0)",
        }}
      />
    );
  }
}

export default TopDrawerPanel;
