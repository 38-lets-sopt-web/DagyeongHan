import SectionCard from '@/pages/movie-detail/components/SectionCard'
import type { MovieDetail } from '@/shared/schemas/movie'
import { MESSAGES } from '@/shared/constants/messages'

type OverviewSectionProps = {
  data: MovieDetail
}

export default function OverviewSection({ data }: OverviewSectionProps) {
  return (
    <SectionCard className="w-full flex flex-col gap-3">
      <h2 className="typo-title1">줄거리</h2>
      <p className={`typo-body1 ${data.overview ? '' : 'text-text-alternative'}`}>{data.overview || MESSAGES.EMPTY_DATA}</p>
    </SectionCard>
  )
}
