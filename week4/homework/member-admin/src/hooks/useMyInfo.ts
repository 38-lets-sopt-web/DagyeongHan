import { useEffect, useState } from "react";
import { getUserAPI, patchUserAPI } from "@/api/user";
import type { UserResponseDto } from "@/api/responseDto";

export default function useMyInfo() {
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

  const handlePatchUser = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("userId가 없습니다.");
      return;
    }

    try {
      const response = await patchUserAPI(Number(userId), {
        name,
        email,
        age: Number(age),
      });

      console.log("개인 정보 수정 성공:", response);

      if (response.data) {
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setAge(String(response.data.age));
      }

      alert("개인 정보가 수정되었습니다.");
    } catch (error) {
      console.error("개인 정보 수정 실패:", error);
      alert("개인 정보 수정에 실패했습니다.");
    }
  };

  return {
    user,
    name,
    email,
    age,
    setName,
    setEmail,
    setAge,
    handlePatchUser,
  };
}

export type MyInfoContext = ReturnType<typeof useMyInfo>;
