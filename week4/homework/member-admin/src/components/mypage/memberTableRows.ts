import type { UserResponseDto } from "@/api/responseDto";

export const getMemberTableRows = (member: UserResponseDto) => [
  { label: "이름", value: member.name },
  { label: "아이디", value: member.loginId },
  { label: "이메일", value: member.email },
  { label: "나이", value: `${member.age}세` },
  { label: "파트", value: member.part },
];
