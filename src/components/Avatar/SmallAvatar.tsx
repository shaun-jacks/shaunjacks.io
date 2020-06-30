import React from "react";
import siteConfig from "../../../data/SiteConfig";
import AvatarLinks from "./AvatarLinks";

/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export default function SmallAvatar() {
  const { avatar } = siteConfig;
  const { siteTitle } = siteConfig;

  return (
    <div>
      <Styled.h2
        sx={{
          mt: 5,
          color: `primary`,
          mb: 0,
          borderTop: `1px solid`,
          pt: "15px",
          textAlign: `center`,
        }}
      >
        {siteTitle}
      </Styled.h2>

      <div
        sx={{
          display: `flex`,
          flexDirection: "column",
          alignItems: `center`,
          mb: 2,
          mt: 3,
        }}
      >
        <img
          src={avatar.photo}
          sx={{ width: 70, height: 70, borderRadius: "50%", mr: 3 }}
        />
        <Styled.p>{avatar.description}</Styled.p>
      </div>
    </div>
  );
}
