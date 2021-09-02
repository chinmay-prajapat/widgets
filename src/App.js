import React from "react";
import Accordion from "./components/Accordion";
export default () => {
  const items = [
    {
      title: "what is React?",
      content: "React is a front end framework",
    },
    {
      title: "what does React do?",
      content: "React is a front end framework",
    },
    {
      title: "How does React react?",
      content: "React is a front end framework",
    },
  ];
  return (
    <div>
      <Accordion item={items} />
    </div>
  );
};
