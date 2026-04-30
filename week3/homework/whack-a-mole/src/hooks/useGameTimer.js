import { useEffect, useState } from 'react';
import { GAME_DURATION_SECONDS } from '../constants/game';

export default function useGameTimer({ isPlaying, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_SECONDS);

  const resetTime = () => {
    setTimeLeft(GAME_DURATION_SECONDS);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const nextTimeLeft = Math.max(0, Number((prevTimeLeft - 0.1).toFixed(1)));

        if (nextTimeLeft === 0) {
          onTimeUp();
        }

        return nextTimeLeft;
      });
    }, 100);

    return () => {
      clearInterval(timerId);
    };
  }, [isPlaying, onTimeUp]);

  return {
    resetTime,
    timeLeft,
  };
}
