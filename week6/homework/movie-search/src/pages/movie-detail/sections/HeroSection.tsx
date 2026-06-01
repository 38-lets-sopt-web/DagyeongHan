export default function HeroSection() {
  return (
    <section className="w-full flex flex-col bg-brand-secondary rounded-medium overflow-hidden">
      <div className="w-full h-85 bg-black">image</div>
      <div className="flex px-4 py-4 gap-4">
        <div className="w-54 h-85 bg-black rounded-medium">image</div>
        <div className="flex flex-1 flex-col gap-4">
          <div>날짜</div>
          <div>제목</div>
          <div className="flex gap-2">
            <div>장르</div><div>장르</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="border w-full p-2 rounded-medium">
              <div>평점</div>
              <div>7.6/10</div>
            </div>
            <div className="border w-full p-2 rounded-medium">
              <div>투표 수</div>
              <div>1,378</div>
            </div>
            <div className="border w-full p-2 rounded-medium">
              <div>상영 시간</div>
              <div>-</div>
            </div>
            <div className="border w-full p-2 rounded-medium">
              <div>상태</div>
              <div>-</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
