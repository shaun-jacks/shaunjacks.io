import { lighten } from "@theme-ui/color";

export const HitsWrapper = {
  zIndex: 100,
  bg: "panelBackground",
  flex: "1",
  boxShadow: `1px 2px 8px rgba(0, 0, 0, 0.2)`,
  width: "100vw",
  span: {
    textDecoration: "none",
  },
  overflow: "scroll",
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
};

export const HitsBackgroundOverlay = {
  width: "100%",
  height: "100%",
  m: 0,
  flex: "1",
  color: "rgba(0, 0, 0, .25)",
  backgroundColor: "rgba(0, 0, 0, .5)",
  zIndex: 1,
  "&:hover": { cursor: "auto" },
};

export const PostHitHeader = {
  fontSize: "21px",
  my: 1,
  textUnderline: "none",
  width: "inherit",
  transition: "all .3s ease",
  "&:hover": {
    cursor: "pointer",
    color: lighten("primary", 0.2),
  },
};

export const InputStyles = (isFocused: boolean): {} => ({
  form: {
    display: "flex",
    flex: "1",
    flexDirection: "flex-end",
    alignItems: "center",
    input: {
      outline: "none",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderBottomWidth: "2px",
      borderBottomColor: "primary",
      fontSize: "1em",
      padding: 2,
      transition: ".3s",
      borderRadius: ".2em",
      color: "primary",
      width: isFocused ? "100%" : "inherit",
      bg: isFocused ? "muted" : "transparent",
    },
  },
});

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
      transition: ".3s all  ease",
      borderRadius: ".2em",
      backgroundColor: "inherit",
      "&:focus, &:hover": {
        outline: "none",
        width: "40vw",
        bg: lighten("background", 0.1),
      },
    },
  },
};
