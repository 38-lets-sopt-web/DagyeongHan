/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router";
import Input from "@/components/Input";
import MemberCard from "@/components/mypage/MemberCard";
import Button from "@/components/Button";
import Table from "@/components/Table";

export interface Member {
  id: string;
  name: string;
  email: string;
  age: string;
  part: string;
}

const members: Member[] = [
  {
    id: "example",
    name: "이름",
    email: "web@web.com",
    age: "24",
    part: "웹",
  },
  {
    id: "member1",
    name: "이름",
    email: "member1@web.com",
    age: "23",
    part: "서버",
  },
  {
    id: "member2",
    name: "이름",
    email: "member2@web.com",
    age: "25",
    part: "기획",
  },
  {
    id: "member3",
    name: "이름",
    email: "member3@web.com",
    age: "22",
    part: "디자인",
  },
];

const getMemberTableRows = (member: Member) => [
  { label: "아이디", value: member.id },
  { label: "이름", value: member.name },
  { label: "이메일", value: member.email },
  { label: "나이", value: member.age },
  { label: "파트", value: member.part },
];

export default function CheckMembers() {
  const [searchId, setSearchId] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const searchedMember = members.find(({ id }) => id === searchId.trim());

  const handleSearch = () => {
    if (!searchId.trim()) {
      return;
    }

    setHasSearched(true);
  };

  return (
    <div css={rootContainerStyle}>
      <h2 css={titleStyle}>회원 조회</h2>

      <section css={fieldStyle}>
        <span css={labelStyle}>회원 ID</span>
        <Input
          placeholder="ID를 입력하세요"
          value={searchId}
          onChange={(event) => setSearchId(event.target.value)}
        />
        <Button buttonText="검색" disabled={!searchId.trim()} onClick={handleSearch} />
      </section>

      <section css={fieldStyle}>
        <h3 css={titleStyle}>검색 결과</h3>
        <Table
          rows={hasSearched && searchedMember ? getMemberTableRows(searchedMember) : []}
          emptyMessage={
            hasSearched
              ? "검색 결과가 없습니다."
              : "원하는 아이디를 검색해보세요!🔎"
          }
        />
      </section>

      <section css={memberListStyle}>
        <h3 css={titleStyle}>전체 멤버 리스트</h3>
        <div css={cardSectionStyle}>
          {members.map((member) => (
            <Link
              key={member.id}
              to={`/mypage/checkmembers/${member.id}`}
              state={{ member }}
              css={cardLinkStyle}
            >
              <MemberCard name={member.name} part={member.part} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const rootContainerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
`;

const titleStyle = css`
  margin: 0;
`;

const labelStyle = css`
  font-size: 0.75em;
  font-weight: 600;
`;

const fieldStyle = css`
  width: 30em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const memberListStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const cardSectionStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  gap: 1em;
`;

const cardLinkStyle = css`
  color: inherit;
  text-decoration: none;
`;
