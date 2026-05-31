import { useEffect, useState } from "react";
import { getUserAPI, getUserListAPI } from "@/api/user";
import type { UserListItemResponseDto, UserResponseDto } from "@/api/responseDto";

export default function useMembers() {
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

  return {
    members,
    searchId,
    searchedUser,
    hasSearched,
    setSearchId,
    handleSearch,
  };
}
