import React from "react";
import AvatarLinks from "./AvatarLinks";
import { Link } from "gatsby";
import siteConfig from "../../../data/SiteConfig";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

export default function BigAvatar() {
  const { avatar } = siteConfig;

  return (
    <>
      <div sx={{ textAlign: `center` }}>
        <img src={avatar.photo} sx={{ width: 300, borderRadius: 999 }} />
        <Styled.h1 sx={{ color: `text` }}>
          Hello! I'm{" "}
          <Link
            to={"/about"}
            sx={{
              display: `inline`,
              borderBottom: `solid 4px`,
              fontSize: 32,
              color: `primary`,
              textDecoration: `none`,
              ":hover": {
                bg: `muted`,
                p: 1,
                borderRadius: `5px`,
              },
            }}
          >
            Shaun
          </Link>
        </Styled.h1>
      </div>
      <AvatarLinks />
      <Styled.p sx={{ textAlign: "center" }}>{avatar.description}</Styled.p>
    </>
  );
}
