/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useOutletContext } from "react-router";
import MyInfoCard from "@/components/mypage/MyInfoCard";
import EditMyInfo from "@/components/mypage/EditMyInfo";
import type { MyInfoContext } from "@/hooks/useMyInfo";

export default function CheckMyInfo() {
  const {
    user,
    name,
    email,
    age,
    setName,
    setEmail,
    setAge,
    handlePatchUser,
  } = useOutletContext<MyInfoContext>();

  return (
    <section css={rootContainerStyle}>
      <h2 css={titleStyle}>내 정보</h2>
      <MyInfoCard user={user} />
      <EditMyInfo
        name={name}
        email={email}
        age={age}
        onNameChange={setName}
        onEmailChange={setEmail}
        onAgeChange={setAge}
        onSubmit={handlePatchUser}
      />
    </section>
  );
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
