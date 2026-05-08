/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export default function Button({ buttonText, ...buttonProps }: ButtonProps) {
  return (
    <button css={btnStyle} {...buttonProps}>{buttonText}</button>
  )
}

const btnStyle = (theme: Theme) => css`
  width: 100%;
  padding: 0.5em 1em;
  border: none;
  border-radius: ${theme.radius.sm};
  font-weight: 700;
  font-size: 1em;
  background: ${theme.colors.primary};
  color: ${theme.colors.foreground};
  cursor: pointer;
  transition: background 0.2s ease;

  &:not(:disabled):hover {
    background: ${theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
