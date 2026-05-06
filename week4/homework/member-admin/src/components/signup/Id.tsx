/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "@/components/Input";

export default function Id() {
  return (
    <div css={rootContainerStyle}>
      <label css={fieldStyle}>
        <span css={labelStyle}>아이디</span>
        <Input placeholder="사용할 아이디를 입력해주세요." />
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