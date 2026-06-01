import StatCard from '@/pages/movie-detail/components/StatCard'

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col bg-brand-secondary rounded-medium overflow-hidden">
      <img className="w-full h-85" />
      <div className="flex px-4 py-4 gap-4">
        <img className="w-54 h-85 rounded-medium" />
        <article className="flex flex-1 flex-col gap-4">
          <time>날짜</time>
          <h1 className='typo-h1'>제목</h1>
          <ul className="flex gap-2 list-none">
            <li>장르</li><li>장르</li>
          </ul>
          <dl className="grid grid-cols-2 gap-2">
            <StatCard label="평점" value="7.6/10" />
            <StatCard label="투표 수" value="1,378" />
            <StatCard label="상영 시간" value="-" />
            <StatCard label="상태" value="-" />
          </dl>
        </article>
      </div>
    </section>
  )
}
