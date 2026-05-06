import api from "@/api/api";
import type { ApiResponse, UserResponseDto } from "@/api/responseDto";

export const getUserAPI = async (userId: number) => {
  const response = await api.get<ApiResponse<UserResponseDto>>(`/users/${userId}`);
  return response.data;
};