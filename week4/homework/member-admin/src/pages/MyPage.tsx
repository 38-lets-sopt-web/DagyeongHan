/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "@/components/mypage/Header";
import { Outlet, useLocation } from "react-router";
import useMyInfo from "@/hooks/useMyInfo";

export default function MyPage() {

  const { pathname } = useLocation();
  const myInfo = useMyInfo();
  const isCheckMembers = pathname.startsWith("/mypage/checkmembers");

  return (
    <section css={rootContainerStyle}>
      <Header userName={myInfo.user?.name} />
      <main css={mainContainerStyle(isCheckMembers)}>
        <Outlet context={myInfo} />
      </main>
    </section>
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