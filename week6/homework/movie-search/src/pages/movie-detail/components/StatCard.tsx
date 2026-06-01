type StatCardProps = {
  label: string
  value: string
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="border border-brand-primary w-full p-2 rounded-medium">
      <dt className="typo-caption1">{label}</dt>
      <dd className="typo-title2">{value}</dd>
    </div>
  )
}
