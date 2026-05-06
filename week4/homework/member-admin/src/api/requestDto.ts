export interface LoginRequestDto {
  loginId: string;
  password: string;
}

export interface SignUpRequestDto {
  loginId: string;
  password: string;
  name: string;
  email: string;
  age: number;
  part: string;
}