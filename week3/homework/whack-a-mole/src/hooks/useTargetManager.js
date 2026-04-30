import { useCallback, useEffect, useRef, useState } from 'react';
import {
  createTarget,
  HIT_VISIBLE_MS,
  TARGET_STATUS,
  TARGET_VISIBLE_MS,
} from '../constants/game';

export default function useTargetManager() {
  const [target, setTarget] = useState(null);
  const targetRef = useRef(target);
  const targetVisibleTimerRef = useRef(null);
  const hitTimerRef = useRef(null);

  const clearTargetVisibleTimer = useCallback(() => {
    if (targetVisibleTimerRef.current) {
      clearTimeout(targetVisibleTimerRef.current);
      targetVisibleTimerRef.current = null;
    }
  }, []);

  const clearHitTimer = useCallback(() => {
    if (hitTimerRef.current) {
      clearTimeout(hitTimerRef.current);
      hitTimerRef.current = null;
    }
  }, []);

  const clearTarget = useCallback(() => {
    setTarget(null);
  }, []);

  const showTarget = useCallback(() => {
    clearTargetVisibleTimer();
    setTarget(createTarget());

    targetVisibleTimerRef.current = setTimeout(() => {
      setTarget((prevTarget) => {
        if (prevTarget?.status === TARGET_STATUS.ACTIVE) {
          return null;
        }

        return prevTarget;
      });
      targetVisibleTimerRef.current = null;
    }, TARGET_VISIBLE_MS);
  }, [clearTargetVisibleTimer]);

  const showHitTarget = useCallback((hitTarget) => {
    clearTargetVisibleTimer();
    clearHitTimer();
    setTarget({ ...hitTarget, status: TARGET_STATUS.HIT });

    hitTimerRef.current = setTimeout(() => {
      setTarget(null);
      hitTimerRef.current = null;
    }, HIT_VISIBLE_MS);
  }, [clearHitTimer, clearTargetVisibleTimer]);

  const clearTargetTimers = useCallback(() => {
    clearTargetVisibleTimer();
    clearHitTimer();
  }, [clearHitTimer, clearTargetVisibleTimer]);

  useEffect(() => {
    targetRef.current = target;
  }, [target]);

  useEffect(() => {
    return () => {
      clearTargetTimers();
    };
  }, [clearTargetTimers]);

  return {
    clearTarget,
    clearTargetTimers,
    showHitTarget,
    showTarget,
    target,
    targetRef,
  };
}
