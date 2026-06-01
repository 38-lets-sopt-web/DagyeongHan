import Dropdown from '@/pages/main/components/Dropdown'
import { RATING_OPTIONS } from '@/shared/constants/ratings'
import type { MovieFilter } from '@/shared/types/common'

type DropdownSectionProps = {
  filter: MovieFilter
  onChange: (filter: MovieFilter) => void
}

export default function DropdownSection({ filter, onChange }: DropdownSectionProps) {
  return (
    <section className="w-full flex gap-4 flex-wrap bg-brand-secondary-light px-8 py-4 rounded-medium">
      <Dropdown
        options={RATING_OPTIONS}
        value={filter.rating}
        onChange={(value) => onChange({ ...filter, rating: value })}
        placeholder="별점 선택"
      />
    </section>
  )
}
