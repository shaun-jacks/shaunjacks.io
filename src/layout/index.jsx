import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import "./index.css";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

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
            mt: "70px",
            mx: "auto",
            maxWidth: `container`,
            width: ["90%", "90%", "100%"],
          }}
        >
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          <NavMenu menuLinks={config.menuLinks} />
          <div style={{ marginTop: `0`, marginBottom: `50px`, mx: "auto" }}>
            {children}
          </div>
        </Styled>
        <Footer />
      </div>
    );
  }
}
