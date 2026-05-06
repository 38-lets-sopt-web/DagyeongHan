/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { postLoginAPI } from "@/api/auth";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isLoginEnabled = Boolean(id.trim() && password.trim());

  const handleLogin = async () => {
    if (!isLoginEnabled || isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await postLoginAPI({
        loginId: id.trim(),
        password: password.trim(),
      });

      console.log("로그인 성공:", response);

      if (response.data) {
        localStorage.setItem("userId", String(response.data.userId));
      }

      navigate("/mypage");
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message ?? "로그인에 실패했습니다."
        : "로그인에 실패했습니다.";

      console.error("로그인 실패:", error);
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div css={rootContainerStyle}>
      {/* ?쒕ぉ */}
      <h1 css={titleStyle}>SOPT MEMBERS</h1>

      <div css={layoutStyle}>
        {/* ?꾩씠???낅젰 */}
        <label css={fieldStyle}>
          <span css={labelStyle}>아이디</span>
          <Input
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
        </label>

        {/* 鍮꾨?踰덊샇 ?낅젰 */}
        <label css={fieldStyle}>
          <span css={labelStyle}>비밀번호</span>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      {/* 踰꾪듉 */}
      <label css={btnWrapStyle}>
        <Button
          buttonText="로그인"
          disabled={!isLoginEnabled || isSubmitting}
          onClick={handleLogin}
        />
        <Link to="/signup" css={toSignUpStyle}>
          회원가입
        </Link>
      </label>
    </div>
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
