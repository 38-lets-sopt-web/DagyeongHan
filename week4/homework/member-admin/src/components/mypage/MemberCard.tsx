/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";

interface MemberCardProps {
  name: string;
  part: string;
}

export default function MemberCard({ name, part }: MemberCardProps) {
  return (
    <article css={CardWrapStyle}>
      <span css={nameStyle}>{name}</span>
      <span css={partStyle}>{part}</span>
    </article>
  );
}

const CardWrapStyle = (theme: Theme) => css`
  width: 100%;
  min-width: 12em;
  height: 7em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625em;
  padding: 1em;
  background: ${theme.colors.surface};
  border-radius: ${theme.radius.sm};
  cursor: pointer;
`;

const nameStyle = css`
  font-weight: 600;
`;

const partStyle = (theme: Theme) => css`
  background: ${theme.colors.primary};
  border-radius: ${theme.radius.pill};
  font-size: 0.825em;
  font-weight: 700;
  padding: 0.375em 0.625em;
  color: ${theme.colors.surface};
`;
