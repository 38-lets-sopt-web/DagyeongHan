/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Input from "@/components/Input";
import MemberCard from "@/components/mypage/MemberCard";
import Button from "@/components/Button";
import Table from "@/components/Table";
import { getUserAPI, getUserListAPI } from "@/api/user";
import type { UserListItemResponseDto, UserResponseDto } from "@/api/responseDto";
import { getMemberTableRows } from "@/components/mypage/memberTableRows";

export default function CheckMembers() {
  const [members, setMembers] = useState<UserListItemResponseDto[]>([]);
  const [searchId, setSearchId] = useState("");
  const [searchedUser, setSearchedUser] = useState<UserResponseDto>();
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await getUserListAPI();

        if (response.data) {
          setMembers(response.data.users);
        }
      } catch (error) {
        console.error("유저 목록 조회 실패:", error);
      }
    };

    void fetchMembers();
  }, []);

  const handleSearch = async () => {
    const userId = Number(searchId.trim());

    if (!userId) {
      return;
    }

    try {
      const response = await getUserAPI(userId);
      setSearchedUser(response.data);
    } catch (error) {
      console.error("유저 상세 조회 실패:", error);
      setSearchedUser(undefined);
    } finally {
      setHasSearched(true);
    }
  };

  return (
    <div css={rootContainerStyle}>
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
