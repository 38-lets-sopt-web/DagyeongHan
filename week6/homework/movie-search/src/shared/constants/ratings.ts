import type { Option } from '@/shared/types/common'

export const RATING_OPTIONS: Option[] = [
  { label: '전체 선택', value: '' },
  ...Array.from({ length: 10 }, (_, i) => ({
    label: `${10 - i}점 대`,
    value: String(10 - i),
  })),
]
