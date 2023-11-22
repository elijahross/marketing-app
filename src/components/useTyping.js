import React from "react";
import { useRef, useState } from "react";

const FORWARD = 'forward';
const BACKWARD = 'backward';

export const useTyping = (
  words,
  keySpeed = 100,
  maxPauseAmount = 10,
) => {
    const [isStopped, setIsStopped] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[wordIndex].split(''));

	const direction = useRef(BACKWARD);
	const typingInterval = useRef();
	const letterIndex = useRef();

    const stop = () => {
        clearInterval(typingInterval.current);
        setIsStopped(true);
    }
    const start = () => {
        clearInterval(typingInterval.current);
        setWordIndex(0);
        setIsStopped(false);
        }
    }

    useEffect(() => {
        let pauseCounter = 0;
        if (isStopped) return;

        const typeLetter = () => {
            if (letterIndex.current >= words[wordIndex].length) {
                direction.current = BACKWARD;
                pauseCounter = maxPauseAmount;    
                return;
                }
            const segment = words[wordIndex].split('');
            setCurrentWord(currentWord.concat(segment[letterIndex.current]));
            letterIndex.current = letterIndex.current +1;
            }

        const backspace = () => {
            if (letterIndex.current === 0) {
                const isOnLastWord = wordIndex === words.length -1;
                setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
                direction.current = FORWARD;
                pauseCounter = maxPauseAmount; 
                return;
            }
            const segment = currentWord.slice(0, currentWord.length -1);
            setCurrentWord(segment);
            letterIndex.current = currentWord.length -1;
        }
        typingInterval.current = setInterval(() => {
            if (pauseCounter > 0) {
                pauseCounter = pauseCounter -1;
                return;
            }
            if (direction.current === FORWARD) {
                typeLetter();
            } else {
                backspace();
            }}, keySpeed);

        return () => {
            clearInterval(typingInterval.current);
        }
    }, [currentWord, wordIndex, keySpeed, words, isStopped, maxPauseAmount]);


    return {
            text: (
                <span className={`word ${currentWord.length ? 'full' : 'empty'}`}>
                  <span>{currentWord.length ? currentWord.join('') : '0'}</span>
                </span>
              ),
            start,
            stop,
            };


