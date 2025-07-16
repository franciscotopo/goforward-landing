import { useEffect, useState } from "react";

const useTypewriter = (text: string, speed = 100, spacePause = 200) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (i < text.length) {
        const nextChar = text.charAt(i);
        setDisplayed((prev) => prev + nextChar);
        i++;

        const nextDelay = nextChar === "." ? spacePause : speed;
        timeoutId = setTimeout(type, nextDelay);
      }
    };

    type(); 

    return () => clearTimeout(timeoutId); // Cleanup
  }, [text, speed, spacePause]);

  return displayed;
};

export default useTypewriter;
