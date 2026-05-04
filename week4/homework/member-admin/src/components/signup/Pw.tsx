/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "../Input";

export default function Pw() {
  return (
    <div css={rootContainerStyle}>
      <label css={fieldStyle}>
        <span css={labelStyle}>비밀번호</span>
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
      </label>
      <label css={fieldStyle}>
        <span css={labelStyle}>비밀번호 확인</span>
        <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요." />
      </label>
    </div>
  )
}

const rootContainerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const fieldStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const labelStyle = css`
  font-size: 0.75em;
  font-weight: 500;
`;