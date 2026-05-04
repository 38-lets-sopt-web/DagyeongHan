/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";
import { useState } from "react";
import Id from "../components/signup/Id";
import Pw from "../components/signup/Pw";
import UserInfo from "../components/signup/UserInfo";

export default function SignUp() {

  const [step, setStep] = useState(1);

  return (
    <div css={rootContainerStyle}>
      <h2 css={titleStyle}>회원가입</h2>
      <div css={layoutStyle}>
        {step === 1 && <Id />}
        {step === 2 && <Pw />}
        {step === 3 && <UserInfo />}

      </div>
        <label css={btnWrapStyle}>
          <button
            css={loginBtnStyle}
            onClick={() => setStep(step + 1)} disabled={step === 3}
          >
            다음
          </button>
          <div css={routeWrapStyle}>
            <div css={messageStyle}> 이미 계정이 있나요?</div>
            <Link to='/login' css={toLinkStyle}>로그인으로 돌아가기</Link>
          </div>
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
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
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

const routeWrapStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const messageStyle = css`
  text-decoration: none;
  color: #ccc;
  font-size: 0.8em;
  font-weight: 500;
`;

const toLinkStyle = css`
  text-decoration: none;
  color: #00ceff;
  font-size: 0.8em;
  font-weight: 500;
`;