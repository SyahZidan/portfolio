import React, { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?`-=[];',./\\";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  className?: string;
  triggerOnHover?: boolean;
  useHoverReset?: boolean;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 30,
  maxIterations = 8,
  sequential = true,
  className = "",
  triggerOnHover = false,
  useHoverReset = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  const startScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            
            if (sequential) {
              if (index < iteration / maxIterations) {
                return text[index];
              }
            } else {
              if (iteration >= maxIterations) return text[index];
            }
            
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length * maxIterations) {
        clearInterval(intervalRef.current!);
        setDisplayText(text);
      }

      iteration++;
    }, speed);
  };

  useEffect(() => {
    if (!triggerOnHover) {
      startScramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, triggerOnHover]);

  const handleMouseEnter = () => {
    if (triggerOnHover && (!isHovered || useHoverReset)) {
      setIsHovered(true);
      startScramble();
    }
  };

  const handleMouseLeave = () => {
    if (triggerOnHover) {
      setIsHovered(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDisplayText(text);
    }
  };

  return (
    <span
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }}
    >
      {displayText}
    </span>
  );
};
