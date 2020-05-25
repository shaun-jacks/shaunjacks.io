import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";

export default function UserInfo({ expanded, config: { userTwitter } }) {
  return (
    <Follow
      username={userTwitter}
      options={{ count: expanded ? true : "none" }}
    />
  );
}
