import { useRef, useState } from 'react';

export default function useGameScore() {
  const [score, setScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const scoreRef = useRef(score);

  const resetScore = () => {
    scoreRef.current = 0;
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
  };

  const increaseScore = () => {
    setScore((prevScore) => {
      const nextScore = prevScore + 1;
      scoreRef.current = nextScore;
      return nextScore;
    });
    setSuccessCount((prevCount) => prevCount + 1);
  };

  const decreaseScore = () => {
    setScore((prevScore) => {
      const nextScore = prevScore - 1;
      scoreRef.current = nextScore;
      return nextScore;
    });
    setFailCount((prevCount) => prevCount + 1);
  };

  return {
    decreaseScore,
    failCount,
    increaseScore,
    resetScore,
    score,
    scoreRef,
    successCount,
  };
}
