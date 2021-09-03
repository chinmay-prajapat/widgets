import React, { useState } from "react";
const Accordion = ({ item }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeState, setStates] = useState(null);
  const onTitleClicked = (index, e) => {
    setActiveIndex(index);
    setStates(e);
  };
  const renderedItems = item.map((item, i) => {
    const active =
      i === activeIndex && !activeState.target.classList.contains("active")
        ? "active"
        : "";

    // console.log(activeState);
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={(e) => onTitleClicked(i, e)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};
export default Accordion;
