/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface InputProps {
  type?: string;
  placeholder: string;
}

export default function Input({ type, placeholder }: InputProps) {
  return (
    <div css={inputContainerStyle}>
      <input css={inputStyle} type={type} placeholder={placeholder} />
    </div>
  );
}

const inputContainerStyle = css`
  width: 100%;
`;

const inputStyle = css`
  width: 100%;
  padding: 0.5em 1em;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1em;
`;
