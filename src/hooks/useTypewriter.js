import { useState, useEffect, useRef } from 'react';

/**
 * useTypewriter — types out text character-by-character.
 *
 * @param {string} text         The string to type out.
 * @param {object} options
 * @param {number} options.speed        ms per character  (default 60)
 * @param {number} options.startDelay   ms before typing starts (default 0)
 * @param {boolean} options.enabled     whether to start typing (default true)
 * @returns {{ displayText: string, isComplete: boolean, cursorVisible: boolean }}
 */
export default function useTypewriter(text = '', options = {}) {
  const { speed = 60, startDelay = 0, enabled = true } = options;

  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const indexRef = useRef(0);

  /* Type characters one-by-one */
  useEffect(() => {
    if (!enabled) return;

    indexRef.current = 0;
    setDisplayText('');
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1;
        setDisplayText(text.slice(0, indexRef.current));

        if (indexRef.current >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay, enabled]);

  /* Blinking cursor */
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(blink);
  }, []);

  return { displayText, isComplete, cursorVisible };
}
