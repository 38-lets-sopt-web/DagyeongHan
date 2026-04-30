/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function MessageBox({ message }) {
  return (
    <div css={messageBoxStyle}>
      <span css={labelStyle}>안내 메시지</span>
      <div css={messageStyle}>{message}</div>
    </div>
  );
}

const messageBoxStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  text-align: center;
`;

const labelStyle = css`
  font-size: 0.9em;
  font-weight: 500;
`;

const messageStyle = css`
  font-weight: 700;
`;