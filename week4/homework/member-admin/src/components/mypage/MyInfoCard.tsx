import Table from "@/components/Table";

const memberInfo = [
  { label: "아이디", value: "example" },
  { label: "파트", value: "웹" },
];

export default function MyInfoCard() {
  return <Table rows={memberInfo} />;
}
