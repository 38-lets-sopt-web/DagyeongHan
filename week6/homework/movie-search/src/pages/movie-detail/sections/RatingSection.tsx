import SectionCard from '@/pages/movie-detail/components/SectionCard'

export default function RatingSection() {
  return (
    <SectionCard className="w-90 flex flex-col gap-3">
      <h2 className="typo-title1">별점 남기기</h2>
      <form className='flex flex-col gap-2'>
        <p className='typo-body2'>0.5 ~ 10.0</p>
        <input type="number" min={0.5} max={10.0} step={0.5} className="border border-brand-primary rounded-small px-3 py-2" />
        <div className='flex gap-2'>
          <button type="submit" className='bg-button-primary text-text-on-primary typo-button1 px-2 py-1 rounded-small'>별점 저장</button>
          <button type="button" className='bg-button-neutral text-text-on-primary typo-button1 px-2 py-1 rounded-small'>별점 삭제하기</button>
        </div>
      </form>
    </SectionCard>
  )
}
