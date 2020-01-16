import React, { useState } from 'react';
import Form from './Form';
import Test from './Test';
import './App.css';

const App = () => {
  const [wordsStr, setWordsStr] = useState('');
  const [wordsArr, setWordsArr] = useState([]);
  const [fontSize, setFontSize] = useState(80);
  const [isTesting, setIsTesting] = useState(false);

  if (isTesting) {
    return (
      <Test
        wordsArr={wordsArr}
        fontSize={fontSize}
        setIsTesting={setIsTesting}
      />
    );
  }

  return (
    <Form
      fontSize={fontSize}
      setFontSize={setFontSize}
      wordsStr={wordsStr}
      setWordsStr={setWordsStr}
      setWordsArr={setWordsArr}
      setIsTesting={setIsTesting}
    />
  );
};

export default App;
