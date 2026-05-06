/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "@/components/mypage/Header";
import { Outlet, useLocation } from "react-router";

export default function MyPage() {

  const { pathname } = useLocation();
  const isCheckMembers = pathname.startsWith("/mypage/checkmembers");

  return (
    <div css={rootContainerStyle}>
      <Header/>
      <main css={mainContainerStyle(isCheckMembers)}>
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

const mainContainerStyle = (isCheckMembers: boolean) => css`
  min-width: ${isCheckMembers
    ? "100%"
    : "30em"};
  padding: 2em 12em;
`;