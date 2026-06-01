import { useState } from 'react'
import Dropdown from '@/shared/components/Dropdown'
import { GENRE_OPTIONS } from '@/shared/constants/genres'

export default function DropdownSection() {
  const [genre, setGenre] = useState('')

  return (
    <div className="w-full flex gap-4 flex-wrap bg-brand-secondary-light px-8 py-4 rounded-medium">
      <Dropdown
        options={GENRE_OPTIONS}
        value={genre}
        onChange={setGenre}
        placeholder="장르 선택"
      />
    </div>
  )
}
