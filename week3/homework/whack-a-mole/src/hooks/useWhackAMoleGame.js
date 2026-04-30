import { useCallback, useEffect, useRef, useState } from 'react';
import {
  SPAWN_INTERVAL_MS,
  TARGET_STATUS,
  TARGET_TYPE,
} from '../constants/game';
import useGameScore from './useGameScore';
import useGameTimer from './useGameTimer';
import useTargetManager from './useTargetManager';

export default function useWhackAMoleGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('시작 버튼을 눌러주세요.');
  const gameEndedRef = useRef(false);

  const {
    decreaseScore,
    failCount,
    increaseScore,
    resetScore,
    score,
    scoreRef,
    successCount,
  } = useGameScore();

  const {
    clearTarget,
    clearTargetTimers,
    showHitTarget,
    showTarget,
    target,
    targetRef,
  } = useTargetManager();

  const finishGame = useCallback((finalScore) => {
    if (gameEndedRef.current) return;

    gameEndedRef.current = true;
    clearTargetTimers();
    clearTarget();
    setIsPlaying(false);
    setMessage('게임 종료');
    alert(`최종 점수는 ${finalScore}점입니다.`);
  }, [clearTarget, clearTargetTimers]);

  const { resetTime, timeLeft } = useGameTimer({
    isPlaying,
    onTimeUp: () => finishGame(scoreRef.current),
  });

  const handleStart = () => {
    gameEndedRef.current = false;
    clearTargetTimers();
    resetScore();
    resetTime();
    setIsPlaying(true);
    setMessage('두더지를 잡아보아요!');
    showTarget();
  };

  const handleStop = () => {
    if (!isPlaying) return;

    finishGame(scoreRef.current);
  };

  const handleHoleClick = (index) => {
    if (!isPlaying || target?.index !== index || target.status !== TARGET_STATUS.ACTIVE) return;

    if (target.type === TARGET_TYPE.MOLE) {
      increaseScore();
      setMessage('두더지를 잡았다!');
      showHitTarget(target);
    }

    if (target.type === TARGET_TYPE.BOMB) {
      decreaseScore();
      setMessage('💣💣💣💣');
      clearTargetTimers();
      clearTarget();
    }
  };

  useEffect(() => {
    if (!isPlaying) return;

    const spawnId = setInterval(() => {
      if (!targetRef.current) {
        showTarget();
      }
    }, SPAWN_INTERVAL_MS);

    return () => {
      clearInterval(spawnId);
    };
  }, [isPlaying, showTarget, targetRef]);

  return {
    failCount,
    handleHoleClick,
    handleStart,
    handleStop,
    isPlaying,
    message,
    score,
    successCount,
    target,
    timeLeft,
  };
}
