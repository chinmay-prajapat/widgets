import axios from "axios";
import React, { useState, useEffect } from "react";
const Temp = () => {
  const [term, setTerm] = useState("dog");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const renderedList = results.map((item) => {
    return (
      <div key={item.title} className="ui segment">
        <div className="ui form">
          <label>{item.title}</label>
        </div>
        <div className="ui content">{item.snippet}</div>
        <div className="right float content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
          >
            Go
          </a>
        </div>
      </div>
    );
  });
  return (
    <div className="ui segment">
      <div className="ui form">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div>{renderedList}</div>
    </div>
  );
};
export default Temp;
