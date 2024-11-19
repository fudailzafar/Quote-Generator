import React, { useState } from "react";
import "./RandomQuote.css";
import twitter_icon from "./assets/twitter.png";

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  return (
    <div className="Container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{quote.author}</div>
          <div className="icons">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
