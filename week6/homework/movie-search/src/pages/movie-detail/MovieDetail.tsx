import { useParams } from 'react-router'
import HeroSection from '@/pages/movie-detail/sections/HeroSection'
import OverviewSection from '@/pages/movie-detail/sections/OverviewSection'
import InfoSection from '@/pages/movie-detail/sections/InfoSection'
import RatingSection from '@/pages/movie-detail/sections/RatingSection'
import { useMovieDetail } from '@/pages/movie-detail/hooks/useMovieDetail'

export default function MovieDetail() {
  const { movieId } = useParams<{ movieId: string }>()
  const { data } = useMovieDetail(Number(movieId))

  if (!data) return null

  return (
    <div className="flex flex-col px-50 py-10 gap-4">
      <div>← 뒤로가기</div>
      <HeroSection data={data} />
      <OverviewSection />
      <div className="w-full flex gap-4">
        <InfoSection />
        <RatingSection />
      </div>
    </div>
  )
}
