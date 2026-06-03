import StatCard from '@/pages/movie-detail/components/StatCard'
import type { MovieDetail } from '@/shared/schemas/movie'
import { formatDate } from '@/shared/utils/format'

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL

type HeroSectionProps = {
  data: MovieDetail
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="w-full flex flex-col bg-brand-secondary rounded-medium overflow-hidden">
      <img className="w-full h-85 object-cover" src={data.backdrop_path ? `${IMAGE_BASE_URL}${data.backdrop_path}` : undefined} alt={data.title} />
      <div className="flex px-4 py-4 gap-4">
        <img className="w-54 h-85 rounded-medium object-cover" src={data.poster_path ? `${IMAGE_BASE_URL}${data.poster_path}` : undefined} alt={data.title} />
        <article className="flex flex-1 flex-col gap-4">
          <time className='typo-caption2'>{formatDate(data.release_date)}</time>
          <h1 className='typo-h1'>{data.title}</h1>
          <ul className="flex gap-2 list-none">
            {data.genres.map((genre) => (
              <li key={genre.id} className='px-2 py-1 border border-brand-primary-dark bg-brand-primary rounded-large text-neutral-900 typo-caption1'>{genre.name}</li>
            ))}
          </ul>
          <dl className="grid grid-cols-2 gap-2">
            <StatCard label="평점" value={`${data.vote_average.toFixed(1)}/10`} />
            <StatCard label="투표 수" value={data.vote_count.toLocaleString()} />
            <StatCard label="상영 시간" value={data.runtime ? `${data.runtime}분` : '-'} />
            <StatCard label="상태" value={data.status} />
          </dl>
        </article>
      </div>
    </section>
  )
}
