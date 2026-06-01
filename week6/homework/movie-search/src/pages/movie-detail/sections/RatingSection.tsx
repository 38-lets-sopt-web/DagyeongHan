import { useState } from 'react'
import SectionCard from '@/pages/movie-detail/components/SectionCard'
import { MESSAGES } from '@/shared/constants/messages'

const STORAGE_KEY = (movieId: number) => `rating_${movieId}`

interface Props {
  movieId: number
}

export default function RatingSection({ movieId }: Props) {
  const saved = localStorage.getItem(STORAGE_KEY(movieId))
  const [value, setValue] = useState<string>(saved ?? '')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = () => {
    const n = Number(value)
    if (!value || n < 0.5 || n > 10.0) return
    const isUpdate = !!localStorage.getItem(STORAGE_KEY(movieId))
    localStorage.setItem(STORAGE_KEY(movieId), value)
    setMessage(isUpdate ? MESSAGES.RATING_UPDATED : MESSAGES.RATING_SAVED)
  }

  const handleDelete = () => {
    localStorage.removeItem(STORAGE_KEY(movieId))
    setValue('')
    setMessage('')
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
        />
        <div className='flex gap-2'>
          <button type="submit" className='bg-button-primary text-text-on-primary typo-button1 px-2 py-1 rounded-small'>별점 저장</button>
          <button type="button" onClick={handleDelete} className='bg-button-neutral text-text-on-primary typo-button1 px-2 py-1 rounded-small'>별점 삭제하기</button>
        </div>
        {message && <p className='typo-body2 text-brand-primary'>{message}</p>}
      </form>
    </SectionCard>
  )
}
