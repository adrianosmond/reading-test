import React, { useState, useEffect } from 'react';
import './Test.css';

const Test = ({ wordsArr, fontSize, setIsTesting }) => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const listenForKeys = e => {
      if (e.keyCode === 37) {
        setCurrentWord(val => Math.max(0, val - 1));
      } else if (e.keyCode === 39) {
        setCurrentWord(val => Math.min(wordsArr.length - 1, val + 1));
      } else if (e.keyCode === 27) {
        setIsTesting(false);
        setCurrentWord(0);
      }
    };
    document.addEventListener('keydown', listenForKeys);
    return () => document.removeEventListener('keydown', listenForKeys);
  }, [setIsTesting, wordsArr.length]);

  return (
    <div className="test">
      {wordsArr.map((w, idx) => {
        if (idx !== currentWord) return null;
        return (
          <div className="word" key={idx} style={{ fontSize: `${fontSize}px` }}>
            {w}
          </div>
        );
      })}
    </div>
  );
};

export default Test;
