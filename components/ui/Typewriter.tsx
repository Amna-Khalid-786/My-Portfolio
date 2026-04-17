"use client";
import { useState, useEffect } from 'react';

export const Typewriter = ({ words, delay = 100, wait = 2000 }: { words: string[], delay?: number, wait?: number }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout = setTimeout(() => setBlink(!blink), 500);
        return () => clearTimeout(timeout);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), wait);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? delay / 2 : delay);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, delay, wait]);

    return (
        <span className="inline-block relative">
            {words[index].substring(0, subIndex)}
            <span className={`static ml-1 w-[3px] inline-block h-[0.9em] bg-indigo-500 align-middle ${blink ? 'opacity-100' : 'opacity-0'}`}>&nbsp;</span>
        </span>
    );
};
