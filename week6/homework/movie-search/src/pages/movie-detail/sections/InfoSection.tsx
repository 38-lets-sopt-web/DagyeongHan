import SectionCard from '@/pages/movie-detail/components/SectionCard'
import type { MovieDetail } from '@/shared/schemas/movie'
import { formatCurrency } from '@/shared/utils/format'

type InfoSectionProps = {
  data: MovieDetail
}

export default function InfoSection({ data }: InfoSectionProps) {
  const rows = [
    { label: '원제', value: data.original_title },
    { label: '원어', value: data.original_language.toUpperCase() },
    { label: '제작 국가', value: data.production_countries.map((c) => c.name).join(', ') || '-' },
    { label: '사용 언어', value: data.spoken_languages.map((l) => l.english_name).join(', ') || '-' },
    { label: '예산', value: formatCurrency(data.budget) },
    { label: '수익', value: formatCurrency(data.revenue) },
  ]

  return (
    <SectionCard className='flex gap-2'>
      <h2 className='typo-title1'>기본 정보</h2>
      <table>
        <tbody>
          {rows.map(({ label, value }) => (
            <tr key={label}>
              <th className='typo-caption1 text-left pr-4'>{label}</th>
              <td className='typo-body1'>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionCard>
  )
}
