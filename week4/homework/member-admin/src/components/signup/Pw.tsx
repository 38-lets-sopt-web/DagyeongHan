/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";

interface PwProps {
  password: string;
  passwordConfirm: string;
  passwordErrorMessage?: string;
  passwordConfirmErrorMessage?: string;
  onPasswordChange: (password: string) => void;
  onPasswordConfirmChange: (passwordConfirm: string) => void;
}

export default function Pw({
  password,
  passwordConfirm,
  passwordErrorMessage,
  passwordConfirmErrorMessage,
  onPasswordChange,
  onPasswordConfirmChange,
}: PwProps) {
  return (
    <div css={rootContainerStyle}>
      <label css={fieldStyle}>
        <span css={labelStyle}>비밀번호</span>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(event) => onPasswordChange(event.target.value)}
        />
        <ErrorMessage message={passwordErrorMessage} />
      </label>
      <label css={fieldStyle}>
        <span css={labelStyle}>비밀번호 확인</span>
        <Input
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          value={passwordConfirm}
          onChange={(event) => onPasswordConfirmChange(event.target.value)}
        />
        <ErrorMessage message={passwordConfirmErrorMessage} />
      </label>
    </div>
  );
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
