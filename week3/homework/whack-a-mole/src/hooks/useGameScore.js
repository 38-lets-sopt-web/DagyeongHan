import { useCallback, useRef, useState } from 'react';

// 게임 점수 및 횟수 관리
export default function useGameScore() {
  const [score, setScore] = useState(0); // 점수 상태
  const [successCount, setSuccessCount] = useState(0); // 성공 횟수 상태
  const [failCount, setFailCount] = useState(0); //감점 횟수 상태
  const scoreRef = useRef(score); // 최신 점수 값 콜백

  // 점수 초기화 콜백
  const resetScore = useCallback(() => {
    scoreRef.current = 0;
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
  }, []);

  // 성공 시 점수 1점씩 추가 누적 콜백
  const increaseScore = useCallback(() => {
    setScore((prevScore) => {
      const nextScore = prevScore + 1;
      scoreRef.current = nextScore;
      return nextScore;
    });
    setSuccessCount((prevCount) => prevCount + 1);
  }, []);

  // 실패 시 점수 1점씩 감점 누적 콜백
  const decreaseScore = useCallback(() => {
    setScore((prevScore) => {
      const nextScore = prevScore - 1;
      scoreRef.current = nextScore;
      return nextScore;
    });
    setFailCount((prevCount) => prevCount + 1);
  }, []);

  // 최신 값 반환
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
