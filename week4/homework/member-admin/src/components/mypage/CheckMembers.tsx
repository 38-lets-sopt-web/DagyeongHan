/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";
import Input from "@/components/Input";
import MemberCard from "@/components/mypage/MemberCard";
import Button from "@/components/Button";
import Table from "@/components/Table";
import { getMemberTableRows } from "@/components/mypage/memberTableRows";
import useMembers from "@/hooks/useMembers";

export default function CheckMembers() {
  const {
    members,
    searchId,
    searchedUser,
    hasSearched,
    setSearchId,
    handleSearch,
  } = useMembers();

  return (
    <section css={rootContainerStyle}>
      <h2 css={titleStyle}>회원 조회</h2>

      <section css={fieldStyle}>
        <span css={labelStyle}>회원 ID</span>
        <Input
          type="number"
          placeholder="ID를 입력하세요"
          value={searchId}
          onChange={(event) => setSearchId(event.target.value)}
        />
        <Button buttonText="검색" disabled={!searchId.trim()} onClick={handleSearch} />
      </section>

      <section css={fieldStyle}>
        <h3 css={titleStyle}>검색 결과</h3>
        <Table
          rows={hasSearched && searchedUser ? getMemberTableRows(searchedUser) : []}
          height="11.25em"
          emptyMessage={
            hasSearched
              ? "검색 결과가 없습니다."
              : "원하는 아이디를 검색해보세요!🔎"
          }
        />
      </section>

      <section css={memberListStyle}>
        <h3 css={titleStyle}>전체 멤버 리스트</h3>
        <ul css={cardSectionStyle}>
          {members.map((member) => (
            <li key={member.id}>
              <Link
                to={`/mypage/checkmembers/${member.id}`}
                css={cardLinkStyle}
              >
                <MemberCard name={member.name} part={member.part} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
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
  margin: 0;
  padding: 0;
  list-style: none;
`;

const cardLinkStyle = css`
  color: inherit;
  text-decoration: none;
`;
