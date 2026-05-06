/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Tabs from "@/components/mypage/Tabs";

export default function Header() {
  return (
    <div css={rootContainerStyle}>
      <div css={titleWrapStyle}>
        <h2 css={titleStyle}>SOPT MEMBERS</h2>
        <span css={greetingTextStyle}>안녕하세요, 한다경님!</span>
      </div>
      <Tabs />
    </div>
  )
}

const rootContainerStyle = css`
  position: sticky;
  top: 0;e
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 4em;
  background: #2e2e35;
`;

const titleWrapStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  text-align-center;
`;

const titleStyle = css`
  margin: 0;
`;

const greetingTextStyle = css`
  font-weight: 500;
  font-size: 0.875em;
`;