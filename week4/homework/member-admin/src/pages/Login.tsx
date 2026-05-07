/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";
import Input from "@/components/Input";
import Button from "@/components/Button";
import useLoginForm from "@/hooks/useLoginForm";

export default function Login() {
  const {
    id,
    password,
    isLoginEnabled,
    isSubmitting,
    setId,
    setPassword,
    handleLogin,
  } = useLoginForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void handleLogin();
  };

  return (
    <main css={rootContainerStyle}>
      {/* 제목 */}
      <h1 css={titleStyle}>SOPT MEMBERS</h1>

      <form css={layoutStyle} onSubmit={handleSubmit}>
        {/* 아이디 입력 */}
        <label css={fieldStyle}>
          <span css={labelStyle}>아이디</span>
          <Input
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
        </label>

        {/* 비밀번호 입력 */}
        <label css={fieldStyle}>
          <span css={labelStyle}>비밀번호</span>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </form>

      {/* 버튼 */}
      <section css={btnWrapStyle}>
        <Button
          buttonText="로그인"
          disabled={!isLoginEnabled || isSubmitting}
          onClick={handleLogin}
        />
        <Link to="/signup" css={toSignUpStyle}>
          회원가입
        </Link>
      </section>
    </main>
  );
}

const rootContainerStyle = css`
  width: min(30em, calc(100% - 2em));
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const titleStyle = css`
  margin: 0;
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

const btnWrapStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

const toSignUpStyle = css`
  text-decoration: none;
  color: #00ceff;
  font-size: 0.75em;
  font-weight: 500;
`;
