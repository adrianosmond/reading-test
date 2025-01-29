import { useState } from 'react';
import Test from './Test';
import Form from './Form';

const App = () => {
  const [wordsStr, setWordsStr] = useState('');
  const [wordsArr, setWordsArr] = useState<string[]>([]);
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
