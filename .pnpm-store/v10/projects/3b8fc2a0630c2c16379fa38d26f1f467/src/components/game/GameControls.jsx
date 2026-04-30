/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function GameControls({ onStart, onStop }) {
  return (
    <div css={controlsStyle}>
      <button type="button" css={[buttonStyle, startButtonStyle]} onClick={onStart}>
        시작
      </button>
      <button type="button" css={[buttonStyle, stopButtonStyle]} onClick={onStop}>
        중단
      </button>
    </div>
  );
}

const controlsStyle = css`
  display: flex;
  gap: 0.5em;
`;

const buttonStyle = css`
  padding: 0.25em 1em;
  border: none;
  border-radius: 100px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

const startButtonStyle = css`
  background: #54c63a;
`;

const stopButtonStyle = css`
  background: #F57799;
`;
