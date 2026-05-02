/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function TotalPointBox({ score }) {
  return (
    <div css={rootContainer}>
      <span css={labelStyle}>총 점수</span>
      <div css={scoreStyle}>{score}</div>
    </div>
  )
}

const rootContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

const labelStyle = css`
  font-size: 0.9em;
  font-weight: 500;
`;

const scoreStyle = css`
  font-size: 2em;
  font-weight: 700;
`;
