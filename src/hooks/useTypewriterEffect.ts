import { useState, useEffect } from "react";

const useTypewriterEffect = (
  words: string[],
  typingDelay = 150,
  deletingDelay = 100,
  pauseBetweenWords = 2000,
): string => {
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const timeout = isDeleting
      ? setTimeout(() => {
          if (subIndex === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          } else {
            setSubIndex((prev) => prev - 1);
            setCurrentWord((prev) => prev.slice(0, -1));
          }
        }, deletingDelay)
      : setTimeout(() => {
          if (subIndex === words[index].length) {
            setTimeout(() => setIsDeleting(true), pauseBetweenWords);
          } else {
            setSubIndex((prev) => prev + 1);
            setCurrentWord((prev) => prev + words[index][subIndex]);
          }
        }, typingDelay);

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    isDeleting,
    index,
    words,
    typingDelay,
    deletingDelay,
    pauseBetweenWords,
  ]);

  return currentWord;
};

export default useTypewriterEffect;
