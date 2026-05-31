/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function ResultBox({ label, count, type }) {
  return (
    <div css={boxStyle}>
      <span css={labelStyle(type)}>{label}</span>
      <strong css={countStyle}>{count}</strong>
    </div>
  );
}

const boxStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 12px;
  background: #FFF7CD;
`;

const labelStyle = (type) => css`
  color: ${type === 'success' ? '#54C63A' : '#F57799'};
  font-size: 0.9em;
  font-weight: 700;
`;

const countStyle = css`
  font-size: 2em;
  font-weight: 700;
`;
