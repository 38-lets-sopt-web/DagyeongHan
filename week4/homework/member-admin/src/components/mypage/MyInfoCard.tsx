import Table from "@/components/Table";
import type { UserResponseDto } from "@/api/responseDto";

interface MyInfoCardProps {
  user?: UserResponseDto;
}

export default function MyInfoCard({ user }: MyInfoCardProps) {
  const rows = user
    ? [
        { label: "아이디", value: user.loginId },
        { label: "파트", value: user.part },
      ]
    : [];

  return <Table rows={rows} emptyMessage="내 정보를 불러오는 중입니다." />;
}
