import { useParams, useNavigate } from 'react-router'
import HeroSection from '@/pages/movie-detail/sections/HeroSection'
import OverviewSection from '@/pages/movie-detail/sections/OverviewSection'
import InfoSection from '@/pages/movie-detail/sections/InfoSection'
import RatingSection from '@/pages/movie-detail/sections/RatingSection'
import { useMovieDetail } from '@/pages/movie-detail/hooks/useMovieDetail'

export default function MovieDetail() {
  const { movieId } = useParams<{ movieId: string }>()
  const navigate = useNavigate()
  const { data } = useMovieDetail(Number(movieId))

  if (!data) return null

  return (
    <div className="flex flex-col px-50 py-10 gap-4">
      <button type="button" onClick={() => navigate(-1)} className="self-start">← 뒤로가기</button>
      <HeroSection data={data} />
      <OverviewSection data={data} />
      <div className="w-full flex gap-4">
        <InfoSection data={data} />
        <RatingSection />
      </div>
    </div>
  )
}
