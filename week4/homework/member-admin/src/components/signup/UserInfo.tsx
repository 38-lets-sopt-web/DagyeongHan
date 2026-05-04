/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "../Input";

export default function UserInfo() {
  return (
    <div css={rootContainerStyle}>
      <label css={fieldStyle}>
        <span css={labelStyle}>이름</span>
        <Input placeholder="이름을 입력해주세요." />
      </label>
      <label css={fieldStyle}>
        <span css={labelStyle}>이메일</span>
        <Input placeholder="이메일을 입력해주세요." />
      </label>
      <label css={fieldStyle}>
        <span css={labelStyle}>나이</span>
        <Input placeholder="나이를 입력해주세요." />
      </label>
      <label css={fieldStyle}>
        <span css={labelStyle}>파트</span>
        <Input placeholder="파트명을 입력해주세요." />
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
  font-size: 0.7em;
  font-weight: 500;
`;