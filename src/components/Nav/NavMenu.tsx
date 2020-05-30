import React from "react";
import siteConfig from "../../../data/SiteConfig";
import WideNavMenu from "./WideNavMenu";
import MobileNavMenu from "./MobileNavMenu";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

interface NavMenuProps {
  menuLinks: { url: string; name: string }[];
}

export default function NavMenu({ menuLinks }: NavMenuProps) {
  const { siteTitle } = siteConfig;
  const navHeight = "45px";
  return (
    <div>
      <Styled
        sx={{
          position: `fixed`,
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 1000,
          height: navHeight,
          backgroundColor: `panelBackground`,
          boxShadow: `1px 2px 8px rgba(0, 0, 0, 0.2)`,
          m: `auto`,
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
    </div>
  );
}
