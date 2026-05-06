/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "@/components/Input";
import MemberCard from "@/components/mypage/MemberCard";
import Button from "@/components/Button";

const memberInfo = [
  { label: "아이디", value: "example" },
  { label: "이름", value: "한다경" },
  { label: "이메일", value: "web@web.com" },
  { label: "나이", value: "24" },
  { label: "파트", value: "웹" },
];

export default function CheckMembers() {
  return (
    <div css={rootContainerStyle}>
      <h2 css={titleStyle}>회원 조회</h2>

      <section css={fieldStyle}>
        <span css={labelStyle}>회원 ID</span>
        <Input placeholder="원하는 ID를 검색해보세요" hasSearchIcon />
        <Button buttonText="검색" />
      </section>

      <section css={fieldStyle}>
        <h3 css={titleStyle}>검색 결과</h3>
        <div css={tableCardStyle}>
          <table css={tableStyle}>
            <tbody>
              {memberInfo.map(({ label, value }) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

const tableCardStyle = css`
  width: 100%;
  padding: 0.875em 1em;
  background: #2e2e35;
  border-radius: 8px;
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.25em 0;
    line-height: 1.5;
  }

  th {
    font-weight: 700;
    text-align: left;
  }

  td {
    color: #ccc;
    font-weight: 500;
    text-align: right;
  }
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
