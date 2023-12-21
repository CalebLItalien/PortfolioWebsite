import React, { useState, useEffect, useRef } from 'react';

interface TypingAnimationProps {
    text: string;
    speed?: number;
    repeatDelay?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 100, repeatDelay = 3000 }) => {
    const [displayedText, setDisplayedText] = useState<string>('');
    const index = useRef(0);
    const intervalRef = useRef<number| null>(null);

    const startAnimation = () => {
        intervalRef.current = window.setInterval(() => {
            index.current++;
            setDisplayedText(text.slice(0, index.current));

            if (index.current >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setTimeout(() => {
                    index.current = 0;
                    setDisplayedText('');
                    startAnimation(); 
                }, repeatDelay);
            }
        }, speed);
    };

    useEffect(() => {
        startAnimation();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [text, speed, repeatDelay]);

    return <span>{displayedText}</span>;
}

export default TypingAnimation;