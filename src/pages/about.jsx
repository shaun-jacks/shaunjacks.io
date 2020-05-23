import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import BigAvatar from "../components/Avatar/BigAvatar";
import config from "../../data/SiteConfig";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

class About extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <section>
          <BigAvatar />
        </section>
      </Layout>
    );
  }
}

export default About;