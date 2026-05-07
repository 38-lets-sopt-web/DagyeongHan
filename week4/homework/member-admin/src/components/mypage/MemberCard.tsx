/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface MemberCardProps {
  name: string;
  part: string;
}

export default function MemberCard({ name, part }: MemberCardProps) {
  return (
    <div css={CardWrapStyle}>
      <span css={nameStyle}>{name}</span>
      <span css={partStyle}>{part}</span>
    </div>
  );
}

const CardWrapStyle = css`
  width: 100%;
  min-width: 12em;
  height: 7em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625em;
  padding: 1em;
  background: #2e2e35;
  border-radius: 8px;
  cursor: pointer;
`;

const nameStyle = css`
  font-weight: 600;
`;

const partStyle = css`
  background: #84e1fa;
  border-radius: 100px;
  font-size: 0.825em;
  font-weight: 700;
  padding: 0.375em 0.625em;
  color: #2e2e35;
`;
