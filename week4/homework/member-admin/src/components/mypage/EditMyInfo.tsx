/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "@/components/Input";
import Button from "@/components/Button";

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
  const isEditEnabled = name.trim() && email.trim() && age.trim();

  return (
    <div css={rootContainerStyle}>
      <div css={layoutStyle}>

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

      </div>

      {/* 버튼 */}
      <Button buttonText="정보 수정" disabled={!isEditEnabled} onClick={onSubmit} />
    </div>
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
