const Card = () => {
  return (
    <div className="w-50 px-5 py-5 bg-neutral-100 rounded-small">
      <img className="w-full bg-amber-50" />
      <h3 className="typo-title1 text-neutral-800">제목</h3>
      <p className="typo-body1 text-neutral-800">날짜</p>
      <p className="type-body1 text-neutral-800">설명</p>
    </div>
  )
}

export default Card