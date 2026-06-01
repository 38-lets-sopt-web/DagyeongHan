import SectionCard from '@/pages/movie-detail/components/SectionCard'

export default function RatingSection() {
  return (
    <SectionCard className="flex-1">
      <h2 className="typo-title1">별점 남기기</h2>
      <form>
        <p>0.5 ~ 10.0</p>
        <input className="border rounded-small" />
        <div>
          <button type="submit">별점 저장</button>
          <button type="button">별점 삭제하기</button>
        </div>
      </form>
    </SectionCard>
  )
}
