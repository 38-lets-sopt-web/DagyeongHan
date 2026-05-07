/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useLocation } from "react-router";
import Table from "@/components/Table";

interface Member {
  id: string;
  name: string;
  email: string;
  age: string;
  part: string;
}

const getMemberTableRows = (member: Member) => [
  { label: "아이디", value: member.id },
  { label: "이름", value: member.name },
  { label: "이메일", value: member.email },
  { label: "나이", value: member.age },
  { label: "파트", value: member.part },
];

export default function MemberDetail() {
  const { state } = useLocation();
  const member = (state as { member?: Member } | null)?.member;

  return (
    <div css={rootContainerStyle}>
      <h2 css={titleStyle}>상세 정보</h2>
      <div css={fieldStyle}>
        <Link to="/mypage/checkmembers" css={backLinkStyle}>
          ← 뒤로가기
        </Link>
      </div>
      <div css={fieldStyle}>
        {member ? (
          <Table rows={getMemberTableRows(member)} />
        ) : (
          <Table rows={[]} emptyMessage="멤버 정보를 찾을 수 없습니다." />
        )}
      </div>
    </div>
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

const backLinkStyle = css`
  color: #84e1fa;
  font-size: 0.825em;
  font-weight: 600;
  text-decoration: none;
`;
