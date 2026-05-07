/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";

interface UserInfoProps {
  name: string;
  email: string;
  age: string;
  part: string;
  nameErrorMessage?: string;
  emailErrorMessage?: string;
  ageErrorMessage?: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onAgeChange: (age: string) => void;
  onPartChange: (part: string) => void;
}

export default function UserInfo({
  name,
  email,
  age,
  part,
  nameErrorMessage,
  emailErrorMessage,
  ageErrorMessage,
  onNameChange,
  onEmailChange,
  onAgeChange,
  onPartChange,
}: UserInfoProps) {
  return (
    <div css={rootContainerStyle}>
      <label css={fieldStyle}>
        <span css={labelStyle}>이름</span>
        <Input
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
        />
        <ErrorMessage message={nameErrorMessage} />
      </label>
      <label css={fieldStyle}>
        <span css={labelStyle}>이메일</span>
        <Input
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
        />
        <ErrorMessage message={emailErrorMessage} />
      </label>
      <label css={fieldStyle}>
        <span css={labelStyle}>나이</span>
        <Input
          placeholder="나이를 입력해주세요."
          value={age}
          onChange={(event) => onAgeChange(event.target.value)}
        />
        <ErrorMessage message={ageErrorMessage} />
      </label>
      <label css={fieldStyle}>
        <span css={labelStyle}>파트</span>
        <Input
          placeholder="파트명을 입력해주세요."
          value={part}
          onChange={(event) => onPartChange(event.target.value)}
        />
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
  font-size: 0.7em;
  font-weight: 500;
`;
