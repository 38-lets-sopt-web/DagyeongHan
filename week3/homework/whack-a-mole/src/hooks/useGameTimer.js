import { useCallback, useEffect, useState } from 'react';

// 게임 타이머 관리
export default function useGameTimer({ duration, isPlaying, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  // 남은 시간 초기화
  const resetTime = useCallback((nextDuration = duration) => {
    setTimeLeft(nextDuration);
  }, [duration]);

  useEffect(() => {
    if (!isPlaying) return; // 진행 중이 아닐 때는 종료

    // 게임 중일 때 0.1초마다 남은 시간 감소
    const timerId = setInterval(() => {
      // 남은 시간 0.1초 줄임 / 0 아래로 내려가지 않게 제한
      setTimeLeft((prevTimeLeft) => (
        Math.max(0, Number((prevTimeLeft - 0.1).toFixed(1))) // 소수점 하나까지만
      ));
    }, 100);

    // 진행 상태 변경 시 기존 타이머 제거(중복 방지)
    return () => {
      clearInterval(timerId);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying || timeLeft !== 0) return;

    // 남은 시간이 0이 되면 게임 종료 처리
    onTimeUp();
  }, [isPlaying, onTimeUp, timeLeft]);

    // 값 반환
  return {
    resetTime,
    timeLeft,
  };
}
