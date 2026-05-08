import { useEffect, useState } from "react";
import { getUserAPI } from "@/api/user";
import type { UserResponseDto } from "@/api/responseDto";

export default function useMemberDetail(memberId?: string) {
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

  return { member };
}
