import React from "react";
import ToogleMode from "./ToogleMode";
import { Link } from "gatsby";
import siteConfig from "../../../data/SiteConfig";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

class NavMenu extends React.Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.navOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navOnScroll);
  }

  navOnScroll = () => {
    if (window.scrollY > 30) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    const { menuLinks } = this.props;
    const { siteTitle } = siteConfig;

    let shadow = `none`;
    if (scrolled === true) {
      shadow = `1px 2px 8px rgba(0, 0, 0, 0.2)`;
    }

    return (
      <nav>
        <Styled
          sx={{
            position: `fixed`,
            width: "100%",
            top: 0,
            left: 0,
            height: `60px`,
            backgroundColor: `panelBackground`,
            boxShadow: `1px 2px 8px rgba(0, 0, 0, 0.2)`,
            m: `auto`,
            zIndex: 100,
          }}
        >
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
            <Link to="/" sx={{ textDecoration: `none`, color: `panelText` }}>
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
                    }}
                  >
                    {link.name}
                  </Styled.h3>
                );
              })}
              <ToogleMode />
            </div>
          </div>
        </Styled>
      </nav>
    );
  }
}

export default NavMenu;
