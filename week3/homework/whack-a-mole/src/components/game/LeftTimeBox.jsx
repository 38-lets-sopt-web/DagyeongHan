/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function LeftTimeBox() {
  return (
    <div css={rootContainer}>
      <span css={labelStyle}>남은 시간</span>
      <div css={timeStyle}>20.0</div>
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

const timeStyle = css`
  font-size: 2em;
  font-weight: 700;
`;