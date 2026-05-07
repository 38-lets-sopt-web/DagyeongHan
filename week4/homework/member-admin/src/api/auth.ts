import api from "@/api/api.ts";
import type { LoginRequestDto, SignUpRequestDto } from "@/api/requestDto";
import type { ApiResponse, LoginResponseDto } from "@/api/responseDto";

export const postLoginAPI = async (data: LoginRequestDto) => {
  const response = await api.post<ApiResponse<LoginResponseDto>>("/auth/signin", data);
  return response.data;
};

export const postSignUpAPI = async (data: SignUpRequestDto) => {
  const response = await api.post<ApiResponse>("/auth/signup", data);
  return response.data;
}