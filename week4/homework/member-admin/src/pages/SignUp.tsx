/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "../components/Input";
import { Link } from "react-router";

export default function SignUp() {
  return (
    <div css={rootContainerStyle}>
      <h2 css={titleStyle}>회원가입</h2>
      <div css={layoutStyle}>
        <label css={fieldStyle}>
          <span css={labelStyle}>아이디</span>
          <Input placeholder="사용할 아이디를 입력해주세요." />
        </label>
          <label css={fieldStyle}>
          <span css={labelStyle}>비밀번호</span>
          <Input type="password" placeholder="비밀번호를 입력해주세요." />
        </label>
        <label css={fieldStyle}>
          <span css={labelStyle}>비밀번호 확인</span>
          <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요." />
        </label>
        <label css={fieldStyle}>
          <span css={labelStyle}>이름</span>
          <Input placeholder="이름을 입력해주세요." />
        </label>
        <label css={fieldStyle}>
          <span css={labelStyle}>이메일</span>
          <Input placeholder="이메일을 입력해주세요." />
        </label>
        <label css={fieldStyle}>
          <span css={labelStyle}>나이</span>
          <Input placeholder="나이를 입력해주세요." />
        </label>
        <label css={fieldStyle}>
          <span css={labelStyle}>파트</span>
          <Input placeholder="파트명을 입력해주세요." />
        </label>

      </div>
        <label css={btnWrapStyle}>
          <button css={loginBtnStyle}>회원가입</button>
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