/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";

interface EditMyInfoProps {
  name: string;
  email: string;
  age: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onAgeChange: (age: string) => void;
  onSubmit: () => void;
}

export default function EditMyInfo({
  name,
  email,
  age,
  onNameChange,
  onEmailChange,
  onAgeChange,
  onSubmit,
}: EditMyInfoProps) {
  const isEmailInvalidFormat = Boolean(email.trim()) &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isEditEnabled = name.trim() && email.trim() && age.trim() && !isEmailInvalidFormat;

  return (
    <form css={rootContainerStyle}>
      <fieldset css={layoutStyle}>

        {/* 아이디 입력 */}
        <label css={fieldStyle}>
          <span css={labelStyle}>이름</span>
          <Input
            placeholder="수정할 이름을 입력해주세요."
            value={name}
            onChange={(event) => onNameChange(event.target.value)}
          />
        </label>

        {/* 비밀번호 입력 */}
        <label css={fieldStyle}>
          <span css={labelStyle}>이메일</span>
          <Input
            placeholder="수정할 이메일을 입력해주세요."
            value={email}
            onChange={(event) => onEmailChange(event.target.value)}
          />
          <ErrorMessage
            message={isEmailInvalidFormat ? "올바른 이메일 형식으로 입력해주세요." : ""}
          />
        </label>

        <label css={fieldStyle}>
          <span css={labelStyle}>나이</span>
          <Input
            type="number"
            placeholder="수정할 나이를 입력해주세요."
            value={age}
            onChange={(event) => onAgeChange(event.target.value)}
          />
        </label>

      </fieldset>

      {/* 버튼 */}
      <Button buttonText="정보 수정" type="button" disabled={!isEditEnabled} onClick={onSubmit} />
    </form>
  );
}

const rootContainerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const layoutStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 0;
  padding: 0;
  border: none;
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
