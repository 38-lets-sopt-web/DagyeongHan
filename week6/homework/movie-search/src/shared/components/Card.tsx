import type { Movie } from '@/shared/schemas/movie'

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL

const Card = ({ title, release_date, overview, poster_path }: Movie) => {
  return (
    <article className="w-70 bg-neutral-100 rounded-small overflow-hidden">
      <img
        className="w-full h-[400px] object-cover"
        src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : undefined}
        alt={title}
      />
      <div className='flex flex-col gap-2 px-4 py-4'>
        <h3 className="typo-title1 text-neutral-800">{title}</h3>
        <p className="typo-body1 text-neutral-800">{release_date}</p>
        <p className="typo-body1 text-neutral-800 overflow-hidden line-clamp-4">{overview}</p>
      </div>
    </article>
  )
}

export default Card
