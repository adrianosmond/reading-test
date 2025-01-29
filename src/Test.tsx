import { useState, useEffect, FC } from 'react';

type TestProps = {
  wordsArr: string[];
  fontSize: number;
  setIsTesting: (isTesting: boolean) => void;
};

const Test: FC<TestProps> = ({ wordsArr, fontSize, setIsTesting }) => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const listenForKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentWord((val) => Math.max(0, val - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentWord((val) => Math.min(wordsArr.length - 1, val + 1));
      } else if (e.key === 'Escape') {
        setIsTesting(false);
        setCurrentWord(0);
      }
    };
    document.addEventListener('keydown', listenForKeys);
    return () => document.removeEventListener('keydown', listenForKeys);
  }, [setIsTesting, wordsArr.length]);

  return (
    <div className="flex justify-center items-center grow">
      {wordsArr.map((w, idx) => {
        if (idx !== currentWord) return null;
        return (
          <div
            className="flex justify-center items-center"
            key={idx}
            style={{ fontSize: `${fontSize}px` }}
          >
            {w}
          </div>
        );
      })}
    </div>
  );
};

export default Test;
