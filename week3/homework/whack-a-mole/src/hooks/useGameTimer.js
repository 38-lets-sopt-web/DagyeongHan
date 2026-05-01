import { useCallback, useEffect, useState } from 'react';

export default function useGameTimer({ duration, isPlaying, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  const resetTime = useCallback((nextDuration = duration) => {
    setTimeLeft(nextDuration);
  }, [duration]);

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
