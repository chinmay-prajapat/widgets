import axios from "axios";
import React, { useState, useEffect } from "react";
const Temp = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    if (term && !results.length) {
      search();
    } else {
      const timeId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);
      return () => {
        clearTimeout(timeId);
      };
    }
  }, [results.length, term]);
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
