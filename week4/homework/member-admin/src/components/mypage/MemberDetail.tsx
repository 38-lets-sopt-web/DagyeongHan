/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Table from "@/components/Table";
import { getUserAPI } from "@/api/user";
import type { UserResponseDto } from "@/api/responseDto";
import { getMemberTableRows } from "@/components/mypage/memberTableRows";

export default function MemberDetail() {
  const { memberId } = useParams();
  const [member, setMember] = useState<UserResponseDto>();

  useEffect(() => {
    const fetchMember = async () => {
      if (!memberId) {
        return;
      }

      try {
        const response = await getUserAPI(Number(memberId));

        if (response.data) {
          setMember(response.data);
        }
      } catch (error) {
        console.error("유저 상세 조회 실패:", error);
      }
    };

    void fetchMember();
  }, [memberId]);

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
