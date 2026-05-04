/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router";

export default function Tabs() {

  return (
    <div css={tabBtnsWrap}>
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

      <button type="button" css={btnStyle}>로그아웃</button>
    </div>
  )
}

const tabBtnsWrap = css`
  display: flex;
  gap: 1em;
`;

const btnStyle = css`
  border: none;
  background: none;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;

const linkStyle = css`
  color: #84e1fa;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5em 0.75em;
  border-radius: 0.5em;

  &.active {
    background: #84e1fa;
    color: #2e2e35;
  }
`;