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

// 두더지 게임 전체 상태 관리
export default function useWhackAMoleGame() {
  const [level, setLevel] = useState(DEFAULT_LEVEL); // 현재 선택된 난이도
  const [isPlaying, setIsPlaying] = useState(false); // 게임 진행 여부
  const [message, setMessage] = useState('시작 버튼을 눌러주세요.'); // 안내 메세지
  const gameEndedRef = useRef(false); // 게임 종료 처리 중복 방지 ref
  const levelSetting = getLevelSetting(level);  // 현재 난이도에 해당하는 게임 세팅

  const {
    decreaseScore,
    failCount,
    increaseScore,
    resetScore,
    score,
    scoreRef,
    successCount,
  } = useGameScore(); // 게임 점수 및 횟수 관리 훅

  const {
    clearTarget,
    clearTargetTimers,
    showHitTarget,
    showTarget,
    target,
    targetRef,
  } = useTargetManager(); // 타겟 상태 관리 훅

  // 게임 상태 초기화
  const resetGame = useCallback(() => {
    clearTargetTimers();
    clearTarget();
    resetScore();
    setIsPlaying(false);
    setMessage('시작 버튼을 눌러주세요.');
  }, [clearTarget, clearTargetTimers, resetScore]);

  // 게임 시작 처리
  const handleStart = () => {
    gameEndedRef.current = false;
    clearTargetTimers();
    resetScore();
    resetTime();
    setIsPlaying(true);
    setMessage('두더지를 잡아보아요!');
    showTarget(levelSetting.boardSize);
  };

  // 게임 종료 처리
  const finishGame = useCallback((finalScore) => {
    // 종료 상태일 때 중복 실행 방지
    if (gameEndedRef.current) return;

    gameEndedRef.current = true;
    clearTargetTimers();
    clearTarget();
    setIsPlaying(false);
    setMessage('게임 종료');

    // 게임 성공 시 랭킹 저장
    if (finalScore > 0) {
      saveRankingRecord({
        level: levelSetting.label,
        score: finalScore,
      });
    }

    alert(`최종 점수는 ${finalScore}점입니다.`);
  }, [clearTarget, clearTargetTimers, levelSetting.label]);
  
  // 게임 중지
  const handleStop = () => {
    if (!isPlaying) return;

    gameEndedRef.current = true;
    resetGame();
    resetTime();
  };

  // 타이머 종료 시 해당 점수로 게임 종료
  const handleTimeUp = useCallback(() => {
    finishGame(scoreRef.current);
  }, [finishGame, scoreRef]);

  // 게임 제한 시간 관리 훅
  const { resetTime, timeLeft } = useGameTimer({
    duration: levelSetting.duration,
    isPlaying,
    onTimeUp: handleTimeUp,
  });

  // 난이도 변경
  const handleLevelChange = (nextLevel) => {
    // 게임 진행 중에는 난이도 변경 불가
    if (isPlaying) return;

    const nextLevelSetting = getLevelSetting(nextLevel);

    setLevel(nextLevel);
    resetGame();
    resetTime(nextLevelSetting.duration);
  };

  // 구멍 클릭 처리
  const handleHoleClick = (index) => {
    // 게임 중이 아니거나 클릭한 칸에 타겟이 없으면 무시
    if (!isPlaying || target?.index !== index || target.status !== TARGET_STATUS.ACTIVE) return;

    // 두더지 클릭 시
    if (target.type === TARGET_TYPE.MOLE) {
      increaseScore(); // 1점 추가
      setMessage('두더지를 잡았다!'); // 안내 메세지
      showHitTarget(target); // 맞춘 타겟 HIT 상태로 잠깐 표시
    }

    // 폭탄 클릭 시
    if (target.type === TARGET_TYPE.BOMB) {
      decreaseScore(); // 1점 감점
      setMessage('💣💣💣💣'); // 안내 메세지
      clearTargetTimers(); // 타이머 정리
      clearTarget(); // 타겟 제거
    }
  };

   // 게임 중 타겟이 없으면 일정 간격마다 새 타겟 생성
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

  // 게임 상태 및 이벤트 함수 반환
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
