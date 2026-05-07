/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink, useNavigate } from "react-router";

export default function Tabs() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    alert("로그아웃되었습니다.");
    navigate("/login");
  };

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

      <button type="button" css={btnStyle} onClick={handleLogout}>로그아웃</button>
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
  font-size: 0.825em;
  cursor: pointer;
`;

const linkStyle = css`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.825em;
  padding: 0.5em 0.75em;
  border-radius: 0.5em;

  &.active {
    font-weight: 700;
    font-size: 0.825em;
    color: #84e1fa;
  }
`;
