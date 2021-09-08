import axios from "axios";
import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounced, setDebounced] = useState(text);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebounced(text);
    }, 1000);
    return () => {
      clearTimeout(timeId);
    };
  }, [text]);
  useEffect(() => {
    const trans = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounced,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    if (debounced) {
      trans();
    }
  }, [debounced, language]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};
export default Convert;
