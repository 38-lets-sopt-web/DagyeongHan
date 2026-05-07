import api from "@/api/api";
import type { UserUpdateRequestDto } from "@/api/requestDto";
import type { ApiResponse, UserResponseDto } from "@/api/responseDto";

export const getUserAPI = async (userId: number) => {
  const response = await api.get<ApiResponse<UserResponseDto>>(`/users/${userId}`);
  return response.data;
};

export const patchUserAPI = async (userId: number, body: UserUpdateRequestDto) => {
  const response = await api.patch<ApiResponse<UserResponseDto>>(`/users/${userId}`, body);
  return response.data;
};
