/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MyInfoCard from "./MyInfoCard";
import EditMyInfo from "./EditMyInfo";

export default function CheckMyInfo() {
  return (
    <div css={rootContainerStyle}>
      <h2 css={titleStyle}>내 정보</h2>
      <MyInfoCard />
      <EditMyInfo />
    </div>
  )
}

const rootContainerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const titleStyle = css`
  margin: 0;
  text-align: center;
`;