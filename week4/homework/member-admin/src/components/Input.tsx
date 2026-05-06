/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export default function Input({ type, placeholder, ...inputProps }: InputProps) {
  return (
    <div css={inputContainerStyle}>
      <input css={inputStyle} type={type} placeholder={placeholder} {...inputProps} />
    </div>
  );
}

const inputContainerStyle = css`
  width: 30em;
  position: relative;
  display: flex;
  align-items: center;
`;

const inputStyle = css`
  width: 100%;
  padding: 0.5em 1em;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875em;
`;
