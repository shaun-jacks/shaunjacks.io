import React, { Component } from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "gatsby";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export default function PolicyBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      style={{ background: "#1e1e1e" }}
      buttonStyle={{
        background: "#91d5ff",
        border: "1px solid #1e1e1e",
        fontSize: "13px",
        color: "#141414",
      }}
    >
      <div>
        <Styled.p sx={{ fontSize: "16px" }}>
          By using{" "}
          <Link sx={{ textDecoration: "none", color: "#91d5ff" }} to="/">
            shaunjacks.io
          </Link>
          , you accept our{" "}
          <Link
            sx={{ textDecoration: "none", color: "#91d5ff" }}
            to="/cookie-policy"
          >
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link
            sx={{ textDecoration: "none", color: "#91d5ff" }}
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          .
        </Styled.p>
      </div>
    </CookieConsent>
  );
}
