/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { Link, useParams } from "react-router";
import Table from "@/components/Table";
import { getMemberTableRows } from "@/components/mypage/memberTableRows";
import useMemberDetail from "@/hooks/useMemberDetail";

export default function MemberDetail() {
  const { memberId } = useParams();
  const { member } = useMemberDetail(memberId);

  return (
    <article css={rootContainerStyle}>
      <h2 css={titleStyle}>상세 정보</h2>
      <nav css={fieldStyle}>
        <Link to="/mypage/checkmembers" css={backLinkStyle}>
          ← 뒤로가기
        </Link>
      </nav>
      <section css={fieldStyle}>
        {member ? (
          <Table rows={getMemberTableRows(member)} height="12em" />
        ) : (
          <Table rows={[]} height="12em" emptyMessage="멤버 정보를 찾을 수 없습니다." />
        )}
      </section>
    </article>
  );
}

const rootContainerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

const fieldStyle = css`
  width: 30em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

const titleStyle = css`
  margin: 0;
`;

const backLinkStyle = (theme: Theme) => css`
  color: ${theme.colors.primary};
  font-size: 0.825em;
  font-weight: 600;
  text-decoration: none;
`;
