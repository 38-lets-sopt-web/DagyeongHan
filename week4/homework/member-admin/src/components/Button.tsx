/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ButtonProps {
  buttonText: string;
}

export default function Button({ buttonText }: ButtonProps) {
  return (
    <button css={btnStyle}>{buttonText}</button>
  )
}

const btnStyle = css`
  width: 100%;
  padding: 0.5em 1em;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.875em;
  background: #84e1fa;
  color: #0F1012;
  cursor: pointer;
`;
