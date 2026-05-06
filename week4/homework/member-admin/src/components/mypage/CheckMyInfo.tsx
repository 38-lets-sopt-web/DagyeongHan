/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import MyInfoCard from "@/components/mypage/MyInfoCard";
import EditMyInfo from "@/components/mypage/EditMyInfo";
import { getUserAPI } from "@/api/user";
import type { UserResponseDto } from "@/api/responseDto";

export default function CheckMyInfo() {
  const [user, setUser] = useState<UserResponseDto>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("userId가 없습니다.");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await getUserAPI(Number(userId));
        console.log("개인 정보 조회 성공:", response);

        if (response.data) {
          setUser(response.data);
          setName(response.data.name);
          setEmail(response.data.email);
          setAge(String(response.data.age));
        }
      } catch (error) {
        console.error("개인 정보 조회 실패:", error);
      }
    };

    void fetchUser();
  }, []);

  return (
    <div css={rootContainerStyle}>
      <h2 css={titleStyle}>내 정보</h2>
      <MyInfoCard user={user} />
      <EditMyInfo
        name={name}
        email={email}
        age={age}
        onNameChange={setName}
        onEmailChange={setEmail}
        onAgeChange={setAge}
      />
    </div>
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