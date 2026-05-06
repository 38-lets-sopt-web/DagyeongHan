/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SearchIcon } from "@/assets/icons";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  hasSearchIcon?: boolean;
}

export default function Input({ type, placeholder, hasSearchIcon = false, ...inputProps }: InputProps) {
  return (
    <div css={inputContainerStyle}>
      {hasSearchIcon && (
        <button css={searchBtnStyle}>
          <SearchIcon css={searchIconStyle} />
        </button>
      )}
      <input css={inputStyle(hasSearchIcon)} type={type} placeholder={placeholder} {...inputProps} />
    </div>
  );
}

const inputContainerStyle = css`
  width: 30em;
  position: relative;
  display: flex;
  align-items: center;
`;

const searchBtnStyle = css`
  position: absolute;
  display: flex;
  align-items: center;
  border: none;
  margin-left: 0.5em;
  background: none;
  cursor: pointer;
`;

const searchIconStyle = css`
  color: #76767f;
`;

const inputStyle = (hasSearchIcon: boolean) => css`
  width: 100%;
  padding: 0.5em 1em 0.5em ${hasSearchIcon ? "2.75em" : "1em"};
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875em;
`;
