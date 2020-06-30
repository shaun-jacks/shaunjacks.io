import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";
import NavMenu from "../components/Nav/NavMenu";
import Footer from "../components/Footer/Footer";
import CookieConsent from "react-cookie-consent";
import "./index.css";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import PolicyBanner from "../components/PolicyBanner";
import Search from "../components/Search/Search";
import { mediaQueries } from "../gatsby-plugin-theme-ui";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      sx={{
        fontFamily: "body",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Styled
        sx={{
          fontFamily: `body`,
          mt: "60px",
          mx: "auto",
          width: "100%",
        }}
      >
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <NavMenu menuLinks={config.menuLinks} />

        <div style={{ margin: `0 auto 50px auto` }}>
          <PolicyBanner />
          {children}
        </div>
      </Styled>
      <Footer />
    </div>
  );
}
