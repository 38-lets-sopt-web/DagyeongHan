type StatCardProps = {
  label: string
  value: string
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="flex flex-col gap-2 p-2.5 border border-brand-primary w-full rounded-medium">
      <dt className="typo-caption1">{label}</dt>
      <dd className="typo-title2">{value}</dd>
    </div>
  )
}
