import React, { useState, useRef, useEffect } from "react";
const Temp = ({ options, setOption, selected }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener(
      "click",
      (e) => {
        if (ref.current.contains(e.target)) {
          return;
        }
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderedList = options.map((item) => {
    if (item.value === selected.value) return null;
    return (
      <div className="item" key={item.label} onClick={() => setOption(item)}>
        {item.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""} `}>
            {renderedList}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Temp;
