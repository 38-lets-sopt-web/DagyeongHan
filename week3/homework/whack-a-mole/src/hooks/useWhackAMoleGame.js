import { useCallback, useEffect, useRef, useState } from 'react';
import {
  DEFAULT_LEVEL,
  getLevelSetting,
  SPAWN_INTERVAL_MS,
  TARGET_STATUS,
  TARGET_TYPE,
} from '../constants/game';
import { saveRankingRecord } from '../utils/rankingStorage';
import useGameScore from './useGameScore';
import useGameTimer from './useGameTimer';
import useTargetManager from './useTargetManager';

export default function useWhackAMoleGame() {
  const [level, setLevel] = useState(DEFAULT_LEVEL);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('시작 버튼을 눌러주세요.');
  const gameEndedRef = useRef(false);
  const levelSetting = getLevelSetting(level);

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

  const resetGame = useCallback(() => {
    clearTargetTimers();
    clearTarget();
    resetScore();
    setIsPlaying(false);
    setMessage('시작 버튼을 눌러주세요.');
  }, [clearTarget, clearTargetTimers, resetScore]);

  const finishGame = useCallback((finalScore) => {
    if (gameEndedRef.current) return;

    gameEndedRef.current = true;
    clearTargetTimers();
    clearTarget();
    setIsPlaying(false);
    setMessage('게임 종료');

    if (finalScore > 0) {
      saveRankingRecord({
        level: levelSetting.label,
        score: finalScore,
      });
    }

    alert(`최종 점수는 ${finalScore}점입니다.`);
  }, [clearTarget, clearTargetTimers, levelSetting.label]);

  const handleTimeUp = useCallback(() => {
    finishGame(scoreRef.current);
  }, [finishGame, scoreRef]);

  const { resetTime, timeLeft } = useGameTimer({
    duration: levelSetting.duration,
    isPlaying,
    onTimeUp: handleTimeUp,
  });

  const handleStart = () => {
    gameEndedRef.current = false;
    clearTargetTimers();
    resetScore();
    resetTime();
    setIsPlaying(true);
    setMessage('두더지를 잡아보아요!');
    showTarget(levelSetting.boardSize);
  };

  const handleStop = () => {
    if (!isPlaying) return;

    gameEndedRef.current = true;
    resetGame();
    resetTime();
  };

  const handleLevelChange = (nextLevel) => {
    if (isPlaying) return;

    const nextLevelSetting = getLevelSetting(nextLevel);

    setLevel(nextLevel);
    resetGame();
    resetTime(nextLevelSetting.duration);
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
        showTarget(levelSetting.boardSize);
      }
    }, SPAWN_INTERVAL_MS);

    return () => {
      clearInterval(spawnId);
    };
  }, [isPlaying, levelSetting.boardSize, showTarget, targetRef]);

  return {
    boardSize: levelSetting.boardSize,
    failCount,
    handleHoleClick,
    handleLevelChange,
    handleStart,
    handleStop,
    isPlaying,
    level,
    message,
    score,
    successCount,
    target,
    timeLeft,
  };
}
