/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { EyeIcon, EyeOffIcon } from "@/assets/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export default function Input({ type, placeholder, ...inputProps }: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPasswordType = type === "password";
  const inputType = isPasswordType && isPasswordVisible ? "text" : type;
  const Icon = isPasswordVisible ? EyeOffIcon : EyeIcon;

  return (
    <div css={inputContainerStyle}>
      <input
        css={inputStyle(isPasswordType)}
        type={inputType}
        placeholder={placeholder}
        {...inputProps}
      />
      {isPasswordType && (
        <button
          css={toggleButtonStyle}
          type="button"
          aria-label={isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
          onClick={() => setIsPasswordVisible((prev) => !prev)}
        >
          <Icon css={iconStyle} />
        </button>
      )}
    </div>
  );
}

const inputContainerStyle = css`
  width: 30em;
  position: relative;
  display: flex;
  align-items: center;
`;

const inputStyle = (hasRightIcon: boolean) => css`
  width: 100%;
  padding: 0.5em ${hasRightIcon ? "3em" : "1em"} 0.5em 1em;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875em;
`;

const toggleButtonStyle = css`
  position: absolute;
  right: 0.75em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  padding: 0;
  border: none;
  background: none;
  color: #76767f;
  cursor: pointer;
`;

const iconStyle = css`
  width: 1.25em;
  height: 1.25em;
`;
