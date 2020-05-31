import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import { Link } from "gatsby";
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
      <section sx={{ mt: 4, fontSize: "14px" }}>
        <div sx={{ textAlign: `center` }}>
          <img src={avatar.photo} sx={{ width: 200, borderRadius: 999 }} />
          <Styled.h2>Shaun Jackson</Styled.h2>
          <AvatarLinks />
        </div>
        <div>
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
