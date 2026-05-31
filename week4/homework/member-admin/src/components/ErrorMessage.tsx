/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) {
    return null;
  }

  return <p css={errorMessageStyle}>{message}</p>;
}

const errorMessageStyle = (theme: Theme) => css`
  margin: 0;
  color: ${theme.colors.error};
  font-size: 0.75em;
  font-weight: 500;
`;
