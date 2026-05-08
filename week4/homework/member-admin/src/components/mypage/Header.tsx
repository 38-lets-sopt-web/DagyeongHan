/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import Tabs from "@/components/mypage/Tabs";

interface HeaderProps {
  userName?: string;
}

export default function Header({ userName }: HeaderProps) {
  const greetingText = userName ? `안녕하세요, ${userName}님!` : "안녕하세요!";

  return (
    <header css={rootContainerStyle}>
      <section css={titleWrapStyle}>
        <h2 css={titleStyle}>SOPT MEMBERS</h2>
        <span css={greetingTextStyle}>{greetingText}</span>
      </section>
      <Tabs />
    </header>
  );
}

const rootContainerStyle = (theme: Theme) => css`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 4em;
  background: ${theme.colors.surface};
  z-index: 10;
`;

const titleWrapStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const titleStyle = css`
  margin: 0;
`;

const greetingTextStyle = css`
  font-weight: 500;
  font-size: 0.875em;
`;