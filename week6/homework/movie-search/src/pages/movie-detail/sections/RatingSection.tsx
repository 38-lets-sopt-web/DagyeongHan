import { useState } from 'react'
import SectionCard from '@/pages/movie-detail/components/SectionCard'
import { MESSAGES } from '@/shared/constants/messages'
import { getGuestSession } from '@/shared/api/auth'
import { rateMovie, deleteMovieRating } from '@/pages/movie-detail/api/movie'

const RATING_KEY = (movieId: number) => `rating_${movieId}`

interface Props {
  movieId: number
}

export default function RatingSection({ movieId }: Props) {
  const saved = localStorage.getItem(RATING_KEY(movieId))
  const [value, setValue] = useState<string>(saved ?? '')
  const [message, setMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    const n = Number(value)
    if (!value || n < 0.5 || n > 10.0) return

    setIsLoading(true)
    try {
      const guestSessionId = await getGuestSession()
      const isUpdate = !!localStorage.getItem(RATING_KEY(movieId))
      await rateMovie(movieId, n, guestSessionId)
      localStorage.setItem(RATING_KEY(movieId), value)
      setMessage(isUpdate ? MESSAGES.RATING_UPDATED : MESSAGES.RATING_SAVED)
    } catch {
      setMessage(MESSAGES.RATING_ERROR)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      const guestSessionId = await getGuestSession()
      await deleteMovieRating(movieId, guestSessionId)
      localStorage.removeItem(RATING_KEY(movieId))
      setValue('')
      setMessage(MESSAGES.RATING_DELETED)
    } catch {
      setMessage(MESSAGES.RATING_ERROR)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SectionCard className="w-90 flex flex-col gap-3">
      <h2 className="typo-title1">별점 남기기</h2>
      <form className='flex flex-col gap-2' onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
        <p className='typo-body2'>0.5 ~ 10.0</p>
        <input
          type="number"
          min={0.5}
          max={10.0}
          step={0.5}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-brand-primary rounded-small px-3 py-2"
          disabled={isLoading}
        />
        <div className='flex gap-2'>
          <button type="submit" disabled={isLoading} className='bg-button-primary text-text-on-primary typo-button1 px-2 py-1 rounded-small disabled:opacity-50'>별점 저장</button>
          <button type="button" onClick={handleDelete} disabled={isLoading} className='bg-button-neutral text-text-on-primary typo-button1 px-2 py-1 rounded-small disabled:opacity-50'>별점 삭제하기</button>
        </div>
        {message && <p className='typo-caption1 text-brand-primary-light'>{message}</p>}
      </form>
    </SectionCard>
  )
}
