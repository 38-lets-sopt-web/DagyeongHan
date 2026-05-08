/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { NavLink } from "react-router";
import useLogout from "@/hooks/useLogout";

export default function Tabs() {
  const { handleLogout } = useLogout();

  return (
    <nav css={tabBtnsWrap}>
      <NavLink
        to="/mypage/userinfo"
        css={linkStyle}
      >
        내 정보
      </NavLink>

      <NavLink
        to="/mypage/checkmembers"
        css={linkStyle}
      >
        회원 조회
      </NavLink>

      <button type="button" css={btnStyle} onClick={handleLogout}>로그아웃</button>
    </nav>
  )
}

const tabBtnsWrap = css`
  display: flex;
  gap: 1em;
`;

const btnStyle = (theme: Theme) => css`
  border: none;
  background: none;
  color: ${theme.colors.text};
  font-weight: 500;
  font-size: 0.825em;
  cursor: pointer;
`;

const linkStyle = (theme: Theme) => css`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.825em;
  padding: 0.5em 0.75em;
  border-radius: ${theme.radius.sm};

  &.active {
    font-weight: 700;
    font-size: 0.825em;
    color: ${theme.colors.primary};
  }
`;
