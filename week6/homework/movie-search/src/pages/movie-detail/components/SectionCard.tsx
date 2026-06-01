type SectionCardProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionCard({ children, className }: SectionCardProps) {
  return (
    <section className={`flex flex-col px-4 py-4 bg-brand-secondary rounded-medium overflow-hidden${className ? ` ${className}` : ''}`}>
      {children}
    </section>
  )
}
