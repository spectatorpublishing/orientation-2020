import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import React from "react";
import { withInfo } from "@storybook/addon-info";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../src/GlobalStyles";

function withGlobalStyles(storyFn) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        {storyFn()}
      </React.Fragment>
    </ThemeProvider>
  );
}

addDecorator(
  withInfo({
    inline: true
  })
);
addDecorator(withGlobalStyles);

function loadStories() {
  require("../src/stories/StyleGuide.jsx");
  require("../src/stories/index.js");
  // You can require as many stories as you need.
}

configure(loadStories, module);

configure(loadStories, module);
