/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Input from "@/components/Input";
import MemberCard from "@/components/mypage/MemberCard";
import Button from "@/components/Button";
import Table from "@/components/Table";

const memberInfo = [
  { label: "아이디", value: "example" },
  { label: "이름", value: "한다경" },
  { label: "이메일", value: "web@web.com" },
  { label: "나이", value: "24" },
  { label: "파트", value: "웹" },
];

export default function CheckMembers() {
  const [searchId, setSearchId] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

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
          rows={hasSearched ? memberInfo : []}
          emptyMessage="원하는 ID를 검색해보세요! 🔎"
        />
      </section>

      <section css={memberListStyle}>
        <h3 css={titleStyle}>전체 멤버 리스트</h3>
        <div css={cardSectionStyle}>
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
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
