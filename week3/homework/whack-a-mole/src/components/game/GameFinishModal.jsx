/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function GameFinishModal({ score, level, onClose }) {
  const [countdown, setCountdown] = useState(3); // 리셋까지 남은 초
  const [isResetting, setIsResetting] = useState(false); // 리셋 중 상태

  useEffect(() => {
    // 1초마다 카운트다운 감소
    const countdownId = setInterval(() => {
      setCountdown((prevCountdown) => Math.max(1, prevCountdown - 1));
    }, 1000);

    // 3초 후 리셋 중 문구 표시
    const resettingId = setTimeout(() => {
      setIsResetting(true);
      clearInterval(countdownId);
    }, 3000);

    // '리셋 중' 문구 띄우고 모달 닫음
    const closeId = setTimeout(() => {
      onClose();
    }, 3600);

    return () => {
      clearInterval(countdownId);
      clearTimeout(resettingId);
      clearTimeout(closeId);
    };
  }, [onClose]);

  return createPortal(
    <div css={overlayStyle}>
      <div css={modalStyle}>
        <strong css={titleStyle}>Level {level} 게임 종료!</strong>
        <span css={scoreStyle}>최종 점수: {score}점</span>
        <span css={resetTextStyle}>
          {isResetting ? '리셋 중...' : `${countdown}초 후 게임이 리셋됩니다...`}
        </span>
      </div>
    </div>,
    document.body
  );
}

const overlayStyle = css`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.32);
`;

const modalStyle = css`
  width: 14em;
  height: 8em;
  padding: 1.25em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  box-sizing: border-box;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 0.8em 2em rgba(0, 0, 0, 0.18);
`;

const titleStyle = css`
  color: #31566f;
  font-size: 1.1em;
`;

const scoreStyle = css`
  color: #28a4d5;
  font-size: 1.2em;
  font-weight: 800;
`;

const resetTextStyle = css`
  color: #31566f;
  font-size: 0.75em;
  font-weight: 700;
`;