import type { Movie } from '@/shared/schemas/movie'
import { Link } from 'react-router'
import { MESSAGES } from '@/shared/constants/messages'
import { formatDate } from '@/shared/utils/format'

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL

const Card = ({ id, title, release_date, overview, poster_path }: Movie) => {

  return (
    <Link to={`/movie-detail/${id}`}>
      <article className="w-full h-142.5 bg-brand-secondary rounded-small overflow-hidden cursor-pointer transition-transform duration-300 ease-[ease] hover:scale-102">
        <img
          className="w-full h-[400px] object-cover object-top"
          src={`${IMAGE_BASE_URL}${poster_path}`}
          alt={title}
        />
        <div className='flex flex-col gap-2 px-4 py-4'>
          <h3 className="typo-title1 text-neutral-50">{title}</h3>
          <p className="typo-body2 text-neutral-100">{formatDate(release_date)}</p>
          <p className={`typo-body2 line-clamp-4 ${overview ? 'text-neutral-100' : 'text-neutral-400'}`}>{overview || MESSAGES.EMPTY_DATA}</p>
        </div>
      </article>
    </Link>
  )
}

export default Card
