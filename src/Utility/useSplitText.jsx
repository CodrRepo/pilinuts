import { useMemo } from 'react';

const useSplitWords = (text, className = '') => {
  return useMemo(() => {
    return text.split('').map((word, index) => (
      <span key={index} className="overflow-hidden inline-block">
        <span className={`ps-char inline-block relative ${className}`}>
          {word}
        </span>
      </span>
    ));
  }, [text, className]);
};

export default useSplitWords;