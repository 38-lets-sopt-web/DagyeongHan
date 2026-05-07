/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) {
    return null;
  }

  return <p css={errorMessageStyle}>{message}</p>;
}

const errorMessageStyle = css`
  margin: 0;
  color: #ff6b6b;
  font-size: 0.75em;
  font-weight: 500;
`;
