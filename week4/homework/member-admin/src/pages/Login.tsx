/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";
import Input from "../components/Input";

export default function Login() {
  return (
    <div css={rootContainerStyle}>

      {/* 제목 */}
      <h1 css={titleStyle}>SOPT MEMBERS</h1>

      <div css={layoutStyle}>

        {/* 아이디 입력 */}
        <label css={fieldStyle}>
          <span css={labelStyle}>아이디</span>
          <Input placeholder="아이디를 입력해주세요." />
        </label>

        {/* 비밀번호 입력 */}
        <label css={fieldStyle}>
          <span css={labelStyle}>비밀번호</span>
          <Input type="password" placeholder="비밀번호를 입력해주세요." />
        </label>

      </div>
      
        {/* 버튼 */}
        <label css={btnWrapStyle}>
          <button css={loginBtnStyle}>로그인</button>
          <Link to='/signup' css={toSignUpStyle}>회원가입</Link>
        </label>
    </div>
  )
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
  font-size: 0.9em;
  font-weight: 500;
`;

const btnWrapStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

const loginBtnStyle = css`
  width: 100%;
  padding: 0.5em 1em;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1em;
  background: #84e1fa;
  color: #0F1012;
  cursor: pointer;
`;

const toSignUpStyle = css`
  text-decoration: none;
  color: #00ceff;
  font-size: 0.8em;
  font-weight: 500;
`;