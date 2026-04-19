export function applyFilter({
  applyBtn,
  resetBtn,
  titleInput,
  filterDropdowns,
  expenseData,
  expenseList,
  renderData,
}) {
  // 필터 적용 기능
  applyBtn.addEventListener("click", () => {
    // 필터 적용할 값 변수 선언
    const titleValue = titleInput.value.trim().toLowerCase();
    const typeValue = filterDropdowns[0].querySelector(".dropdown-btn").childNodes[0].textContent.trim();
    const categoryValue = filterDropdowns[1].querySelector(".dropdown-btn").childNodes[0].textContent.trim();
    const paymentValue = filterDropdowns[2].querySelector(".dropdown-btn").childNodes[0].textContent.trim();

    // 필터링
    const filteredData = expenseData.filter((item) => {
      // 제목 검색
      const isTitleMatch = item.title.toLowerCase().includes(titleValue);

      // 유형 필터 조건 초기화
      let isMatchType = true;
      
      // 유형 필터링
      if (typeValue === "수입") {
        isMatchType = item.amount > 0; // 수입이면 true
      } else if (typeValue === "지출") {
        isMatchType = item.amount < 0; // 지출이면 false
      }

      // 카테고리, 결제수단 필터링
      const isCategoryMatch = categoryValue === "전체" || item.category === categoryValue;
      const isPaymentMatch = paymentValue === "전체" || item.payment === paymentValue;

      // AND 조건
      return isTitleMatch && isMatchType && isCategoryMatch && isPaymentMatch;
    });

    // 필터링된 데이터 렌더링
    renderData(expenseList, filteredData);
  });

  // 필터 초기화 기능
  resetBtn.addEventListener("click", () => {
    location.reload();
  });
}