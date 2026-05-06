/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "@/components/mypage/Header";
import { Outlet } from "react-router";

export default function MyPage() {
  return (
    <div css={rootContainerStyle}>
      <Header/>
      <main css={mainContainerStyle}>
        <Outlet />
      </main>
    </div>
  )
}

const rootContainerStyle = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

const mainContainerStyle = css`
  width: min(30em, calc(100% - 2em));
`;