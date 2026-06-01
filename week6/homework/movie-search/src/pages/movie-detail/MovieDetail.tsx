import HeroSection from '@/pages/movie-detail/sections/HeroSection'
import OverviewSection from '@/pages/movie-detail/sections/OverviewSection'
import InfoSection from '@/pages/movie-detail/sections/InfoSection'
import RatingSection from '@/pages/movie-detail/sections/RatingSection'

export default function MovieDetail() {
  return (
    <div className="flex flex-col px-50 py-10 gap-4">
      <div>← 뒤로가기</div>
      <HeroSection />
      <OverviewSection />
      <div className="w-full flex gap-4">
        <InfoSection />
        <RatingSection />
      </div>
    </div>
  )
}
