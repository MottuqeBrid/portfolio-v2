"use client";

import { useState, useEffect } from "react";

export const useTypewriter = (
  words,
  speed = 150,
  deleteSpeed = 75,
  delayBetweenWords = 2000
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(waitTimer);
    }

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayedText.length < currentWord.length) {
            setDisplayedText(currentWord.slice(0, displayedText.length + 1));
          } else {
            setIsWaiting(true);
          }
        } else {
          // Deleting
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timer);
  }, [
    displayedText,
    wordIndex,
    isDeleting,
    isWaiting,
    words,
    speed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  return displayedText;
};
