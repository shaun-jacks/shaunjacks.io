import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTag from "./PostTag";
import { CommentCount } from "disqus-react";
import Cookies from "js-cookie";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { lighten } from "@theme-ui/color";
import { PostProps } from "./Post.model";

function PostHeader({ post }: PostProps) {
  const disqusConfig = {
    shortname: process.env.disqusShortName as string,
    config: {
      url: "",
      identifier: post.path,
      title: post.title,
    },
  };
  const CookiesEnabled = Cookies.get("CookieConsent");

  return (
    <div sx={{ mb: `-1px`, ml: 2, mr: 3 }}>
      <div sx={{ display: `flex`, flexDirection: `column`, color: "text" }}>
        <div>
          <small sx={{ mr: 2 }}>{post.date}</small>
        </div>
        <small
          sx={{
            fontSize: "12px",
            mt: 2,
          }}
        >
          {post.excerpt}
        </small>
        <div
          sx={{
            display: `flex`,
            flexWrap: `wrap`,
            alignItems: `baseline`,
            fontSize: "12px",
          }}
        >
          {post.tags.map((tag, i) => {
            return (
              <PostTag
                sx={{ marginLeft: 2 }}
                tag={tag}
                index={i}
                key={i}
                length={post.tags.length}
              />
            );
          })}
          {"•"}
          {CookiesEnabled && (
            <div>
              <Link
                sx={{
                  color: `text`,
                  textDecoration: `none`,
                  boxSizing: `content-box`,
                  display: `inline-block`,
                  mt: 1,
                  ml: 1,
                  pr: 1,
                  fontSize: "10px",
                  transition: "all .3s ease",
                  "&:hover": {
                    cursor: "pointer",
                    color: lighten("primary", 0.2),
                  },
                }}
                to={post.path + `#disqus_thread`}
              >
                <CommentCount {...disqusConfig} />
              </Link>
              •
            </div>
          )}
          <small
            sx={{
              fontSize: "10px",
              ml: 1,
              mt: 2,
            }}
          >
            {post.timeToRead}
            {" min"}
          </small>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
