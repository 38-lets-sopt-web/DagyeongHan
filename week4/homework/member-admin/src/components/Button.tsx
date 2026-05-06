/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export default function Button({ buttonText, ...buttonProps }: ButtonProps) {
  return (
    <button css={btnStyle} {...buttonProps}>{buttonText}</button>
  )
}

const btnStyle = css`
  width: 100%;
  padding: 0.5em 1em;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1em;
  background: #84e1fa;
  color: #0F1012;
  cursor: pointer;
  transition: background 0.2s ease;

  &:not(:disabled):hover {
    background: #4ccff2;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
