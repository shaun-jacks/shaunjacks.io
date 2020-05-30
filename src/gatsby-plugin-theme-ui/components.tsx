import Prism from "@theme-ui/prism";
import React from "react";
import ThemeUIPrism from "@theme-ui/prism";
import PrismCore from "prismjs/components/prism-core";
import "prismjs/components/prism-r";
import "prismjs/components/prism-python";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-go";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-java";
import "prismjs/components/prism-jsx";

export default {
  pre: (props: any) => props.children,
  code: (props: any) => <ThemeUIPrism {...props} Prism={PrismCore} />,
};
