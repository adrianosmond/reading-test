import { FC } from 'react';

const shuffle = <T,>(a: T[]) => {
  const shuffled = [...a];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

type FormProps = {
  fontSize: number;
  setFontSize: (fontSize: number) => void;
  setWordsArr: (wordsArr: string[]) => void;
  wordsStr: string;
  setWordsStr: (wordsStr: string) => void;
  setIsTesting: (isTesting: boolean) => void;
};

const Form: FC<FormProps> = ({
  fontSize,
  setFontSize,
  setWordsArr,
  wordsStr,
  setWordsStr,
  setIsTesting,
}) => {
  const startTesting = () => {
    const shuffled = shuffle(wordsStr.trim().split('\n'));
    setWordsArr(shuffled);
    setIsTesting(true);
  };

  return (
    <div className="mx-auto my-0 w-full max-w-3xl">
      <label>
        <div className="mb-2">Enter the words to test, one word per line:</div>
        <textarea
          value={wordsStr}
          onChange={(e) => setWordsStr(e.target.value)}
          className="h-[50vh] w-full p-2 border in"
        />
      </label>
      <div className="mt-4">
        <label>
          <div className="mb-2">How big do you want the words to be shown?</div>
          <input
            type="range"
            min="16"
            max="400"
            step="4"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
            className="p-2"
          />
        </label>
        <div style={{ fontSize: `${fontSize}px` }} className="mt-8 text-center">
          aA
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={startTesting}
          disabled={wordsStr.trim().length === 0}
          className="px-4 py-2 text-white bg-blue-700 disabled:bg-gray-400 border-0 rounded-md float-end"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Form;
