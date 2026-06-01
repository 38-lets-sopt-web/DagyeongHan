type StatCardProps = {
  label: string
  value: string
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="border w-full p-2 rounded-medium">
      <div>{label}</div>
      <div>{value}</div>
    </div>
  )
}
