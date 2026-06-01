import SectionCard from '@/pages/movie-detail/components/SectionCard'

export default function InfoSection() {
  return (
    <SectionCard className='flex gap-2'>
      <h2 className='typo-title1'>기본 정보</h2>
      <table>
        <tbody>
          <tr>
            <td>표</td>
            <td>표</td>
          </tr>
          <tr>
            <td>표</td>
            <td>표</td>
          </tr>
        </tbody>
      </table>
    </SectionCard>
  )
}
