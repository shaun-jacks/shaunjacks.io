import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import PostTages from "./PostTags";

/** @jsx jsx */
import { Styled, jsx, Card } from "theme-ui";

function PostCard(props) {
  // const { post } = props;

  return (
    <Styled>
      <Card
        sx={{
          maxWidth: 256
        }}
      >
        <Text>Card</Text>
      </Card>
    </Styled>
  );
}

export default PostCard;
