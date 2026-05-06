export interface ApiResponse<T = undefined> {
  success: boolean;
  status: number;
  message: string;
  code: string;
  data?: T;
}

export interface LoginResponseDto {
  userId: number;
}