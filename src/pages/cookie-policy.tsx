import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export default function CookiePolicy() {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <section
        sx={{
          mt: 4,
          fontSize: "14px",
          a: { textDecoration: "none", color: "primary" },
          px: 2,
        }}
      >
        <Styled>
          <Styled.h1>Cookies Policy</Styled.h1>
          <Styled.p>Last updated: May 31, 2020</Styled.p>
          <Styled.p>
            This Cookies Policy explains what Cookies are and how We use them.
            You should read this policy so You can understand what type of
            cookies We use, or the information We collect using Cookies and how
            that information is used.
          </Styled.p>
          <Styled.p>
            Cookies do not typically contain any information that personally
            identifies a user, but personal information that we store about You
            may be linked to the information stored in and obtained from
            Cookies. For further information on how We use, store and keep your
            personal data secure, see our Privacy Policy.
          </Styled.p>
          <Styled.p>
            We do not store sensitive personal information, such as mailing
            addresses, account passwords, etc. in the Cookies We use.
          </Styled.p>
          <Styled.h1>Interpretation and Definitions</Styled.h1>
          <Styled.h2>Interpretation</Styled.h2>
          <Styled.p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.
          </Styled.p>
          <Styled.p>
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </Styled.p>
          <Styled.h2>Definitions</Styled.h2>
          <Styled.p>For the purposes of this Cookies Policy:</Styled.p>
          <Styled.ul>
            <Styled.li>
              <Styled.strong>Company</Styled.strong> (referred to as either
              &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
              &quot;Our&quot; in this Cookies Policy) refers to shaunjacks.io.
            </Styled.li>
            <Styled.li>
              <Styled.strong>You</Styled.strong> means the individual accessing
              or using the Website, or a company, or any legal entity on behalf
              of which such individual is accessing or using the Website, as
              applicable.
            </Styled.li>
            <Styled.li>
              <Styled.strong>Cookies</Styled.strong> means small files that are
              placed on Your computer, mobile device or any other device by a
              website, containing details of your browsing history on that
              website among its many uses.
            </Styled.li>
            <Styled.li>
              <Styled.strong>Website</Styled.strong> refers to shaunjacks.io,
              accessible from{" "}
              <a
                href="https://shaunjacks.io"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://shaunjacks.io
              </a>
              .
            </Styled.li>
          </Styled.ul>
          <Styled.h1>The use of the Cookies</Styled.h1>
          <Styled.h2>Type of Cookies We Use</Styled.h2>
          <Styled.p>
            Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
            Cookies. Persistent Cookies remain on your personal computer or
            mobile device when You go offline, while Session Cookies are deleted
            as soon as You close your web browser.
          </Styled.p>
          <Styled.p>
            We use both session and persistent Cookies for the purposes set out
            below:
          </Styled.p>
          <Styled.ul>
            <Styled.li>
              <Styled.p>
                <Styled.strong>Necessary / Essential Cookies</Styled.strong>
              </Styled.p>
              <Styled.p>Type: Session Cookies</Styled.p>
              <Styled.p>Administered by: Us</Styled.p>
              <Styled.p>
                Purpose: These Cookies are essential to provide You with
                services available through the Website and to enable You to use
                some of its features. They help to authenticate users and
                prevent fraudulent use of user accounts. Without these Cookies,
                the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
              </Styled.p>
            </Styled.li>
            <Styled.li>
              <Styled.p>
                <Styled.strong>
                  Cookies Policy / Notice Acceptance Cookies
                </Styled.strong>
              </Styled.p>
              <Styled.p>Type: Persistent Cookies</Styled.p>
              <Styled.p>Administered by: Us</Styled.p>
              <Styled.p>
                Purpose: These Cookies identify if users have accepted the use
                of cookies on the Website.
              </Styled.p>
            </Styled.li>
            <Styled.li>
              <Styled.p>
                <Styled.strong>Functionality Cookies</Styled.strong>
              </Styled.p>
              <Styled.p>Type: Persistent Cookies</Styled.p>
              <Styled.p>Administered by: Us</Styled.p>
              <Styled.p>
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
              </Styled.p>
            </Styled.li>
            <Styled.li>
              <Styled.p>
                <Styled.strong>Tracking and Performance Cookies</Styled.strong>
              </Styled.p>
              <Styled.p>Type: Persistent Cookies</Styled.p>
              <Styled.p>Administered by: Third-Parties</Styled.p>
              <Styled.p>
                Purpose: These Cookies are used to track information about
                traffic to the Website and how users use the Website. The
                information gathered via these Cookies may directly or
                indirectly identify you as an individual visitor. This is
                because the information collected is typically linked to a
                pseudonymous identifier associated with the device you use to
                access the Website. We may also use these Cookies to test new
                advertisements, pages, features or new functionality of the
                Website to see how our users react to them.
              </Styled.p>
            </Styled.li>
            <Styled.li>
              <Styled.p>
                <Styled.strong>Social Media Cookies</Styled.strong>
              </Styled.p>
              <Styled.p>Type: Persistent Cookies</Styled.p>
              <Styled.p>Administered by: Third-Parties</Styled.p>
              <Styled.p>
                Purpose: In addition to Our own Cookies, We may also use various
                third parties Cookies to report usage statistics of the Website,
                deliver advertisements on and through the Website, and so on.
                These Cookies may be used when You share information using a
                social media networking websites such as Facebook, Instagram,
                Twitter or Google+.
              </Styled.p>
            </Styled.li>
          </Styled.ul>
          <Styled.h2>Your Choices Regarding Cookies</Styled.h2>
          <Styled.p>
            If You prefer to avoid the use of Cookies on the Website, first You
            must disable the use of Cookies in your browser and then delete the
            Cookies saved in your browser associated with this website. You may
            use this option for preventing the use of Cookies at any time.
          </Styled.p>
          <Styled.p>
            If You do not accept Our Cookies, You may experience some
            inconvenience in your use of the Website and some features may not
            function properly.
          </Styled.p>
          <Styled.p>
            If You'd like to delete Cookies or instruct your web browser to
            delete or refuse Cookies, please visit the help pages of your web
            browser.
          </Styled.p>
          <Styled.ul>
            <Styled.li>
              <Styled.p>
                For the Chrome web browser, please visit this page from Google:{" "}
                <a
                  href="https://support.google.com/accounts/answer/32050"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.google.com/accounts/answer/32050
                </a>
              </Styled.p>
            </Styled.li>
            <Styled.li>
              <Styled.p>
                For the Internet Explorer web browser, please visit this page
                from Microsoft:{" "}
                <a
                  href="http://support.microsoft.com/kb/278835"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  http://support.microsoft.com/kb/278835
                </a>
              </Styled.p>
            </Styled.li>
            <Styled.li>
              <Styled.p>
                For the Firefox web browser, please visit this page from
                Mozilla:{" "}
                <a
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                </a>
              </Styled.p>
            </Styled.li>
            <Styled.li>
              <Styled.p>
                For the Safari web browser, please visit this page from Apple:{" "}
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </a>
              </Styled.p>
            </Styled.li>
          </Styled.ul>
          <Styled.p>
            For any other web browser, please visit your web browser's official
            web pages.
          </Styled.p>
          <Styled.h2>More Information about Cookies</Styled.h2>
          <Styled.p>
            You can learn more about cookies:{" "}
            <a href="https://www.termsfeed.com/blog/cookies/" target="_blank">
              All About Cookies
            </a>
            .
          </Styled.p>
          <Styled.h2>Contact Us</Styled.h2>
          <Styled.p>
            If you have any questions about this Cookies Policy, You can contact
            us:
          </Styled.p>
          <Styled.ul>
            <Styled.li>By email: shaunbjackson@gmail.com</Styled.li>
          </Styled.ul>
        </Styled>
      </section>
    </Layout>
  );
}
