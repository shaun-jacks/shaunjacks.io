import React from "react";
import ToogleMode from "./ToogleMode";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

class WideNavMenu extends React.Component {
  render() {
    const { menuLinks, siteTitle } = this.props;

    return (
      <div
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          maxWidth: `container`,
          height: "100%",
          m: "auto",
        }}
      >
        <Link
          to="/"
          sx={{
            textDecoration: `none`,
            color: `panelText`,
            transition: "all .3s ease",
            "&:hover": {
              color: lighten("primary", 0.3),
            },
          }}
        >
          <div sx={{ pl: "1rem" }}>{siteTitle}</div>
        </Link>
        <div style={{ display: `flex`, alignItems: `center` }}>
          {menuLinks.map((link) => {
            return (
              <Styled.h3
                key={link.url}
                as={Link}
                to={link.url}
                sx={{
                  mr: 3,
                  textDecoration: `none`,
                  color: "panelText",
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
          <ToogleMode />
        </div>
      </div>
    );
  }
}

export default WideNavMenu;
