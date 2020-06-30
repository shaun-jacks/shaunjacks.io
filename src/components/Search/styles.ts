import { lighten } from "@theme-ui/color";

export const HitsWrapper = {
  borderRadius: "10px",
  zIndex: 999,
  bg: "panelBackground",
  margin: "auto" /* 15% from the top and centered */,
  mx: 3,
  padding: "20px",
  width: "75%" /* Could be more or less, depending on screen size */,
  height: "75%",
  // flex: "1",
  boxShadow: `0px 2px 0px 0px rgba(0, 0, 0, 0.2)`,
  span: {
    textDecoration: "none",
  },
  mark: {
    bg: "primary",
    color: "background",
  },
  a: {
    textDecoration: "none",
  },
  ul: { listStyle: "none" },
};

export const HitsPanelBackground = {
  maxWidth: "900px",
  margin: "auto",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  px: 2,
};

export const HitsBackgroundOverlay = {
  width: "100%",
  height: "100%",
  m: 0,
  flex: "1",
  color: "rgba(0, 0, 0, .25)",
  bg: "rgba(0, 0, 0, .5)",
  zIndex: 999,
  "&:hover": { cursor: "auto" },
};

export const PostHitHeader = {
  fontSize: "21px",
  my: 1,
  textUnderline: "none",
  width: "inherit",
  "&:hover": {
    cursor: "pointer",
    color: lighten("primary", 0.2),
  },
};

export const FormStyled = {
  form: {
    display: "flex",
    flexDirection: "flex-end",
    alignItems: "center",
    input: {
      outline: "none",
      border: "none",
      fontSize: "1em",
      background: "transparent",
      borderRadius: ".2em",
      bg: "inherit",
      "&:focus, &:hover": {
        outline: "none",
        width: "40vw",
        bg: lighten("background", 0.1),
      },
    },
  },
};
