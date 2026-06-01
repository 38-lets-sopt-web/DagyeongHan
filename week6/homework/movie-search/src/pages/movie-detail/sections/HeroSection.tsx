import StatCard from '@/pages/movie-detail/components/StatCard'

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col bg-brand-secondary rounded-medium overflow-hidden">
      <div className="w-full h-85 bg-black">image</div>
      <div className="flex px-4 py-4 gap-4">
        <div className="w-54 h-85 bg-black rounded-medium">image</div>
        <div className="flex flex-1 flex-col gap-4">
          <div>날짜</div>
          <div>제목</div>
          <div className="flex gap-2">
            <div>장르</div><div>장르</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <StatCard label="평점" value="7.6/10" />
            <StatCard label="투표 수" value="1,378" />
            <StatCard label="상영 시간" value="-" />
            <StatCard label="상태" value="-" />
          </div>
        </div>
      </div>
    </section>
  )
}
