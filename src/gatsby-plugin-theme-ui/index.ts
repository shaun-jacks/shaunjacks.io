// import oceanic from "@theme-ui/prism/presets/oceanic-next";
// import nightOwl from "@theme-ui/prism/presets/night-owl.json";
// import github from "@theme-ui/prism/presets/github.json";
// import dracula from "@theme-ui/prism/presets/dracula.json";
import vsDark from "@theme-ui/prism/presets/vs-dark.json";
// import prism from "@theme-ui/prism/presets/theme-ui";
import { darken } from "@theme-ui/color";

const grey90 = `#232129`;
const black80 = `#1B1F23`;
const white = `#fff`;
const lightWhite = `rgba(255, 255, 255, 0.86)`;
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`;
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`;
const darkPink = `#d23669`;
const pink = `#f5317f`;
const blueGray = `#282c35`;
const lightblue = `#a5a4a6`;
const lightGray = "#eee";
const gray = `#CCCCCC`;

export const breakpoints = {
  xs: `400px`,
  sm: `550px`,
  md: `750px`,
  lg: `1000px`,
  xl: `1200px`,
  xxl: `1600px`,
};

export const mediaQueries = Object.entries(breakpoints).reduce(
  (acc, [key, val]) => ({
    ...acc,
    [key]: `@media (min-width: ${val})`,
  }),
  {
    xs: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
    xxl: "",
  }
);
export const breakpointsArr = Object.values(breakpoints);
export const mediaQueriesArr = breakpointsArr.map(
  (breakpoint) => `@media and screen(min-width: ${breakpoint})`
);
export default {
  //theme
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: breakpointsArr,
  mediaQueries: mediaQueriesArr,
  sizes: {
    container: 1200,
    midContainer: 700,
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 72, 96],
  letterSpacing: {
    body: "normal",
    caps: "0.2em",
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  //styles
  styles: {
    root: {
      fontFamily: `body`,
    },
    pre: {
      variant: `prism`,
      fontFamily: `monospace`,
      fontSize: `14px`,
      hyphens: `none`,
      marginBottom: 3,
      color: darkPink,
      bg: `prism.background`,
      overflow: `auto`,
      borderRadius: 5,
      p: 3,
      boxShadow: `1px 2px 10px rgba(0, 0, 0, 0.5)`,
    },
    code: {
      fontFamily: `monospace`,
      ...vsDark,
    },
    inlineCode: {
      borderRadius: `0.3em`,
      bg: `muted`,
      p: `0.3em`,
    },
    // from typography overrideThemeStyles
    h1: {
      fontSize: 32,
      fontFamily: "heading",
      fontWeight: "heading",
      color: "primary",
      mt: 4,
      mb: 4,
    },
    a: {
      color: `primary`,
    },
    p: {
      fontWeight: `body`,
      lineHeight: `body`,
      letterSpacing: `body`,
    },
    li: {
      fontSize: `body`,
      fontWeight: `body`,
      lineHeight: `body`,
      letterSpacing: `body`,
    },
    blockquote: {
      color: `inherit`,
      borderLeft: `solid 5px`,
      paddingLeft: `10px`,
      borderColor: `primary`,
      opacity: 0.8,
      fontStyle: `italic`,
    },
  },
  //Colors
  colors: {
    text: lightWhite,
    textMuted: "#bfbfbf",
    background: "#141414",
    panelBackground: "#1e1e1e",
    panelText: lightWhite,
    primary: "#91d5ff",
    secondary: pink,
    muted: "#2e2e2e",
    highlight: lightblue,
    heading: white,
    prism: {
      background: `#011627`,
    },
    modes: {
      light: {
        text: blueGray,
        textMuted: "#4d5466",
        background: "#fff",
        panelBackground: "#fff",
        panelText: "text",
        primary: "#096dd9",
        secondary: pink,
        muted: "#eaeaea",
        highlight: opaqueLightYellow,
        heading: grey90,
      },
    },
  },
  // Variants
  buttons: {
    default: {
      color: `text`,
      textDecoration: `none`,
      boxSizing: `content-box`,
      display: `inline-block`,
      mt: 1,
      mr: 4,
      px: 3,
      py: ".4rem",
      fontSize: 0,
      border: (t: any) => `1px solid ${t.colors.text}`,
      borderRadius: "20px",
      "&:hover": {
        cursor: "pointer",
        color: "primary",
        borderColor: "primary",
      },
    },
  },
};
