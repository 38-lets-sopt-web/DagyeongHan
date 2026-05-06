import api from "@/api/api";
import type { LoginRequestDto } from "@/api/requestDto";
import type { ApiResponse, LoginResponseDto } from "@/api/responseDto";

export const postLoginAPI = async (data: LoginRequestDto) => {
  const response = await api.post<ApiResponse<LoginResponseDto>>("/auth/signin", data);

  return response.data;
};
