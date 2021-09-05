import React, { useState } from "react";
// import Accordion from "./components/Accordion";
import Search from "./components/search";
import Temp from "./components/Temp";
import Dropdown from "./components/Dropdown";
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];
export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
      {/* <Temp options={options} selected={selected} onSelect={setSelected} /> */}
      <Temp options={options} setOption={setSelected} selected={selected} />
      {/* <Search /> */}
    </div>
  );
};
