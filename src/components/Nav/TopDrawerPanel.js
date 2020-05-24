import React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";
import { Link } from "gatsby";
import ToogleMode from "./ToogleMode";

class TopDrawerPanel extends React.Component {
  render() {
    const { isOpen, siteTitle, menuLinks } = this.props;

    return (
      <div
        sx={{
          position: "relative",
          width: "100%",
          height: "85%",
          backgroundColor: "panelBackground",
          color: "background",
          zIndex: 1000,
          transformOrigin: "top",
          transform: isOpen ? "scaleY(1)" : "scaleY(0)",
        }}
      >
        <div
          sx={{
            display: `flex`,
            justifyContent: `space-around`,
            flexDirection: "column",
            alignItems: `center`,
            height: "100%",
            m: "auto",
          }}
        >
          <div sx={{ flex: ".5" }} />
          <div
            sx={{
              display: "flex",
              flex: "1",
              flexDirection: "column",
              justifyContent: "flex-start",
              fontSize: "21px",
            }}
          >
            {menuLinks.map((link) => {
              return (
                <Styled.h3
                  key={link.url}
                  as={Link}
                  to={link.url}
                  sx={{
                    m: 3,
                    color: "text",
                    textDecoration: `none`,
                    color: "text",
                    transition: "all .3s ease",
                    "&:hover": {
                      color: lighten("primary", 0.3),
                    },
                  }}
                >
                  {link.name}
                </Styled.h3>
              );
            })}
            <div sx={{ m: 3 }}>
              <ToogleMode />
            </div>
          </div>
          <div sx={{ flex: "1" }} />
        </div>
      </div>
    );
  }
}

export default TopDrawerPanel;
