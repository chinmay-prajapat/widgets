import React from "react";
import Accordion from "./components/Accordion";
const items = [
  {
    title: "what is React?",
    content: "React is a Front end js FrameWork",
  },
  {
    title: "How Long Does It Take To Learn",
    content: "React is a Front end js FrameWork",
  },
  {
    title: "This is last Question?",
    content: "React is a Front end js FrameWork",
  },
];
export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
