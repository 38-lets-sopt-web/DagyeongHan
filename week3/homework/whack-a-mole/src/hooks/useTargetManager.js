import { useCallback, useEffect, useRef, useState } from 'react';
import {
  createTarget,
  HIT_VISIBLE_MS,
  TARGET_STATUS,
  TARGET_VISIBLE_MS,
} from '../constants/game';

// 두더지, 폭탄 상태 관리
export default function useTargetManager() {
  const [target, setTarget] = useState(null); // 실시간 타겟 상태
  const targetRef = useRef(target); // 최신 타겟 값 참조용 ref
  const targetVisibleTimerRef = useRef(null); // 타겟 자동으로 사라지는 타이머 id 저장
  const hitTimerRef = useRef(null); // 공격 성공 상태 보여주는 타이머 id 저장

  // 타겟 자동 숨김 타이머 중복 방지
  const clearTargetVisibleTimer = useCallback(() => {
    if (targetVisibleTimerRef.current) {
      clearTimeout(targetVisibleTimerRef.current);
      targetVisibleTimerRef.current = null;
    }
  }, []);

  // 공격 성공 시 HIT 표시 타이머 중복 방지
  const clearHitTimer = useCallback(() => {
    if (hitTimerRef.current) {
      clearTimeout(hitTimerRef.current);
      hitTimerRef.current = null;
    }
  }, []);

  // 현재 타겟 숨김
  const clearTarget = useCallback(() => {
    setTarget(null);
  }, []);

  // 타겟 생성/숨김
  const showTarget = useCallback((boardSize) => {
    clearTargetVisibleTimer();
    setTarget(createTarget(boardSize));

    targetVisibleTimerRef.current = setTimeout(() => {
      setTarget((prevTarget) => {
        // 공격 안한(못한) 두더지 혹은 폭탄이면 숨김
        if (prevTarget?.status === TARGET_STATUS.ACTIVE) {
          return null;
        }

        return prevTarget;
      });
      targetVisibleTimerRef.current = null;
    }, TARGET_VISIBLE_MS);
  }, [clearTargetVisibleTimer]);

  // 공격 성공한 타겟 HIT 상태로 잠깐 보여주고 숨김
  const showHitTarget = useCallback((hitTarget) => {
    clearTargetVisibleTimer();
    clearHitTimer();
    setTarget({ ...hitTarget, status: TARGET_STATUS.HIT });

    hitTimerRef.current = setTimeout(() => {
      setTarget(null);
      hitTimerRef.current = null;
    }, HIT_VISIBLE_MS);
  }, [clearHitTimer, clearTargetVisibleTimer]);

  // 타겟 관련 타이머 다 정리
  const clearTargetTimers = useCallback(() => {
    clearTargetVisibleTimer();
    clearHitTimer();
  }, [clearHitTimer, clearTargetVisibleTimer]);

  // 타겟 상태 변경 시 최신 값 저장
  useEffect(() => {
    targetRef.current = target;
  }, [target]);

  // 컴포넌트 사라지면 타이머 제거
  useEffect(() => {
    return () => {
      clearTargetTimers();
    };
  }, [clearTargetTimers]);

  // 값 반환
  return {
    clearTarget,
    clearTargetTimers,
    showHitTarget,
    showTarget,
    target,
    targetRef,
  };
}
