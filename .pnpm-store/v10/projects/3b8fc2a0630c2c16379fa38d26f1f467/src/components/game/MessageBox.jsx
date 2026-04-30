/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function MessageBox() {
  return (
    <div css={messageBoxStyle}>
      <span css={labelStyle}>안내 메세지</span>
      <div css={messageStyle}>두더지를 잡았다!</div>
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
  font-size: 1.2em;
  font-weight: 700;
`;