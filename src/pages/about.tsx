import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import siteConfig from "../../data/SiteConfig";
import AvatarLinks from "../components/Avatar/AvatarLinks";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export default function About() {
  const { avatar } = siteConfig;

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <section
        sx={{
          mt: 4,
          fontSize: "14px",
          maxWidth: "container",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          m: "auto",
          px: 2,
        }}
      >
        <div sx={{ textAlign: `center`, mt: 4 }}>
          <img
            src="/shaun-coffee-001x.png"
            sx={{ borderRadius: "10px", maxWidth: "100%", maxHeight: "350px" }}
          />
          <Styled.h2>Shaun Jackson</Styled.h2>
          <AvatarLinks />
        </div>
        <div
          sx={{
            maxWidth: "midContainer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
          }}
        >
          <Styled.p>
            I currently work as a Jr. Software Engineer at Sony Playstation with
            a focus on building/maintaining large-scale infrastructure web apps.
            I also am a part-time Data Consultant where I build data processing
            pipelines with a focus on reproducibility.
          </Styled.p>
          <Styled.p>
            I believe that building software is the most scalable way to make an
            impact in the world - whether it be through making an app or
            visualizing tons of data. My goal is to help empower others to do
            that through the spread of knowledge in topics I am passionate about
            - Software Engineering and Data Science.
          </Styled.p>
          <Styled.p>
            You can find me in Southern California, either running up a
            mountain, playing the guitar, or just reading/working with some
            coffee at home!
          </Styled.p>
        </div>
      </section>
    </Layout>
  );
}
