import React from "react";
import ToogleMode from "./ToogleMode";
import { Link } from "gatsby";
import siteConfig from "../../../data/SiteConfig";
import WideNavMenu from "./WideNavMenu";
import MobileNavMenu from "./MobileNavMenu";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { darken, lighten } from "@theme-ui/color";

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
            height: `45px`,
            backgroundColor: `panelBackground`,
            boxShadow: `1px 2px 8px rgba(0, 0, 0, 0.2)`,
            m: `auto`,
            zIndex: 100,
          }}
        >
          <div
            sx={{
              height: "100%",
              "@media screen and (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            <WideNavMenu menuLinks={menuLinks} siteTitle={siteTitle} />
          </div>
          <div
            sx={{
              height: "100%",
              "@media screen and (min-width: 601px)": {
                display: "none",
              },
            }}
          >
            <MobileNavMenu menuLinks={menuLinks} siteTitle={siteTitle} />
          </div>
        </Styled>
      </nav>
    );
  }
}

export default NavMenu;
