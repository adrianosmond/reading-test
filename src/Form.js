import React, { useState } from 'react';
import './Form.css';

const shuffle = a => {
  const shuffled = [...a];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Form = ({ fontSize, setFontSize, setWordsArr, setIsTesting }) => {
  const [wordsStr, setWordsStr] = useState('');

  const startTesting = () => {
    const shuffled = shuffle(wordsStr.trim().split('\n'));
    setWordsArr(shuffled);
    setIsTesting(true);
  };

  return (
    <div className="form">
      <label>
        <div class="label">Enter the words to test, one word per line:</div>
        <textarea
          value={wordsStr}
          onChange={e => setWordsStr(e.target.value)}
        />
      </label>
      <div className="section">
        <label>
          <div class="label">How big do you want the words to be shown?</div>
          <input
            type="range"
            min="16"
            max="400"
            step="4"
            value={fontSize}
            onChange={e => setFontSize(e.target.value)}
          />
        </label>
        <div style={{ fontSize: `${fontSize}px` }} className="example-text">
          aA
        </div>
      </div>
      <div className="section start">
        <button onClick={startTesting} disabled={wordsStr.trim().length === 0}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Form;
