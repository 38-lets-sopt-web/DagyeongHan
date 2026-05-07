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

export interface UserResponseDto {
  id: number;
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

export interface UserListItemResponseDto {
  id: number;
  name: string;
  part: string;
}

export interface UserListResponseDto {
  users: UserListItemResponseDto[];
}
