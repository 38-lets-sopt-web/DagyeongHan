import SectionCard from '@/pages/movie-detail/components/SectionCard'
import type { MovieDetail } from '@/shared/schemas/movie'

type OverviewSectionProps = {
  data: MovieDetail
}

export default function OverviewSection({ data }: OverviewSectionProps) {
  return (
    <SectionCard className="w-full">
      <h2 className="typo-title1">줄거리</h2>
      <p>{data.overview}</p>
    </SectionCard>
  )
}
