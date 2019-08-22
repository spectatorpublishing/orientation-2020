import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import SectionTitle from "../components/SectionTitle.jsx";
import GetToKnow from "../components/GetToKnow";

const sectionComponentDemo = {
  title: "demo title",
  members: ["name1, position1", "name2, position2", "name3, position3"]
};

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("Section", module).add("with member information", () => (
  <SectionTitle
    title={sectionComponentDemo.title}
    members={sectionComponentDemo.members}
  />
));

const backgroundImage = {
  image:
    "https://cdn.pixabay.com/photo/2017/04/25/23/14/columbia-2261135_960_720.jpg"
};
const getToKnow = [
  {
    tab: "BARNUMBIA",
    tabLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    tab: "CAMPUS LIFE",
    tabLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    tab: "ACADEMICS",
    tabLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

storiesOf("GetToKnow", module).add("GetToKnow", () => (
  <GetToKnow getToKnow={getToKnow} backgroundImage={backgroundImage} />
));
