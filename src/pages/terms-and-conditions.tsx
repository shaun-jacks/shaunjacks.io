import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export default function TermsAndConditions() {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <section
        sx={{
          mt: 4,
          fontSize: "14px",
          a: { textDecoration: "none", color: "primary" },
        }}
      >
        <Styled.h1>Terms and Conditions</Styled.h1>
        <Styled.p>Last updated: May 31, 2020</Styled.p>
        <Styled.p>
          These Terms and Conditions (&quot;Terms&quot;, &quot;Terms and
          Conditions&quot;) govern your relationship with{" "}
          <a
            href="https://shaunjacks.io"
            rel="external nofollow noopener"
            target="_blank"
          >
            https://shaunjacks.io
          </a>{" "}
          website (the &quot;Service&quot;) operated by shaunjacks.io
          (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
        </Styled.p>
        <Styled.p>
          Please read these Terms and Conditions carefully before using the
          Service.
        </Styled.p>
        <Styled.p>
          Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users and others who access or use the Service.
        </Styled.p>
        <Styled.p>
          By accessing or using the Service you agree to be bound by these
          Terms. If you disagree with any part of the terms then you may not
          access the Service.
        </Styled.p>
        <Styled.h2>Content</Styled.h2>
        <Styled.p>
          Our Service allows you to post, link, store, share and otherwise make
          available certain information, text, graphics, videos, or other
          material (&quot;Content&quot;). You are responsible for the Content
          that you post to the Service, including its legality, reliability, and
          appropriateness.
        </Styled.p>
        <Styled.p>
          By posting Content to the Service, you grant us the right and license
          to use, modify, publicly perform, publicly display, reproduce, and
          distribute such Content on and through the Service. You retain any and
          all of your rights to any Content you submit, post or display on or
          through the Service and you are responsible for protecting those
          rights. You agree that this license includes the right for us to make
          your Content available to other users of the Service, who may also use
          your Content subject to these Terms.
        </Styled.p>
        <Styled.p>
          You represent and warrant that: (i) the Content is yours (you own it)
          or you have the right to use it and grant us the rights and license as
          provided in these Terms, and (ii) the posting of your Content on or
          through the Service does not violate the privacy rights, publicity
          rights, copyrights, contract rights or any other rights of any person.
        </Styled.p>
        <Styled.h2>Accounts</Styled.h2>
        <Styled.p>
          When you create an account with us, you must provide us information
          that is accurate, complete, and current at all times. Failure to do so
          constitutes a breach of the Terms, which may result in immediate
          termination of your account on our Service.
        </Styled.p>
        <Styled.p>
          You are responsible for safeguarding the password that you use to
          access the Service and for any activities or actions under your
          password, whether your password is with our Service or a third-party
          service.
        </Styled.p>
        <Styled.p>
          You agree not to disclose your password to any third party. You must
          notify us immediately upon becoming aware of any breach of security or
          unauthorized use of your account.
        </Styled.p>
        <Styled.p>
          You may not use as a username the name of another person or entity or
          that is not lawfully available for use, a name or trade mark that is
          subject to any rights of another person or entity other than you
          without appropriate authorization, or a name that is otherwise
          offensive, vulgar or obscene.
        </Styled.p>
        <Styled.h2>Intellectual Property</Styled.h2>
        <Styled.p>
          The Service and its original content (excluding Content provided by
          users), features and functionality are and will remain the exclusive
          property of shaunjacks.io and its licensors. The Service is protected
          by copyright, trademark, and other laws of both the and foreign
          countries. Our trademarks and trade dress may not be used in
          connection with any product or service without the prior written
          consent of shaunjacks.io.
        </Styled.p>
        <Styled.h2>Links To Other Web Sites</Styled.h2>
        <Styled.p>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by shaunjacks.io.
        </Styled.p>
        <Styled.p>
          shaunjacks.io has no control over, and assumes no responsibility for,
          the content, privacy policies, or practices of any third party web
          sites or services. You further acknowledge and agree that Shaun
          Jackson shall not be responsible or liable, directly or indirectly,
          for any damage or loss caused or alleged to be caused by or in
          connection with use of or reliance on any such content, goods or
          services available on or through any such web sites or services.
        </Styled.p>
        <Styled.p>
          We strongly advise you to read the terms and conditions and privacy
          policies of any third-party web sites or services that you visit.
        </Styled.p>
        <Styled.h2>Termination</Styled.h2>
        <Styled.p>
          We may terminate or suspend your account immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if you breach the Terms.
        </Styled.p>
        <Styled.p>
          Upon termination, your right to use the Service will immediately
          cease. If you wish to terminate your account, you may simply
          discontinue using the Service.
        </Styled.p>
        <Styled.h2>Limitation Of Liability</Styled.h2>
        <Styled.p>
          In no event shall shaunjacks.io, nor its directors, employees,
          partners, agents, suppliers, or affiliates, be liable for any
          indirect, incidental, special, consequential or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses, resulting from (i) your access to or use of
          or inability to access or use the Service; (ii) any conduct or content
          of any third party on the Service; (iii) any content obtained from the
          Service; and (iv) unauthorized access, use or alteration of your
          transmissions or content, whether based on warranty, contract, tort
          (including negligence) or any other legal theory, whether or not we
          have been informed of the possibility of such damage, and even if a
          remedy set forth herein is found to have failed of its essential
          purpose.
        </Styled.p>
        <Styled.h2>Disclaimer</Styled.h2>
        <Styled.p>
          Your use of the Service is at your sole risk. The Service is provided
          on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The
          Service is provided without warranties of any kind, whether express or
          implied, including, but not limited to, implied warranties of
          merchantability, fitness for a particular purpose, non-infringement or
          course of performance.
        </Styled.p>
        <Styled.p>
          shaunjacks.io its subsidiaries, affiliates, and its licensors do not
          warrant that a) the Service will function uninterrupted, secure or
          available at any particular time or location; b) any errors or defects
          will be corrected; c) the Service is free of viruses or other harmful
          components; or d) the results of using the Service will meet your
          requirements.
        </Styled.p>
        <Styled.h2>Governing Law</Styled.h2>
        <Styled.p>
          These Terms shall be governed and construed in accordance with the
          laws of California, United States, without regard to its conflict of
          law provisions.
        </Styled.p>
        <Styled.p>
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights. If any provision of these
          Terms is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms
          constitute the entire agreement between us regarding our Service, and
          supersede and replace any prior agreements we might have between us
          regarding the Service.
        </Styled.p>
        <Styled.h2>Changes</Styled.h2>
        <Styled.p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will try to
          provide at least 30 days notice prior to any new terms taking effect.
          What constitutes a material change will be determined at our sole
          discretion.
        </Styled.p>
        <Styled.p>
          By continuing to access or use our Service after those revisions
          become effective, you agree to be bound by the revised terms. If you
          do not agree to the new terms, please stop using the Service.
        </Styled.p>
        <Styled.h2>Contact Us</Styled.h2>
        <Styled.p>
          If you have any questions about these Terms, please contact us.
        </Styled.p>
      </section>
    </Layout>
  );
}
