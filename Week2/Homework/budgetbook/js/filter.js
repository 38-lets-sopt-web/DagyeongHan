const ALL_FILTER = "전체";
const INCOME_FILTER = "수입";
const EXPENSE_FILTER = "지출";

// 공통 필터 함수
export function getFilteredData({ expenseData, filters }) {
  const { title, type, category, payment } = filters;

  // 필터링
  return expenseData.filter((item) => {
    // 제목 검색
    const isTitleMatch = item.title.toLowerCase().includes(title);

    // 유형 필터 조건 초기화
    let isMatchType = true;
      
    // 유형 필터링
    if (type === INCOME_FILTER) {
      isMatchType = item.amount > 0; // 수입이면 true
    } else if (type === EXPENSE_FILTER) {
      isMatchType = item.amount < 0; // 지출이면 false
    }

    // 카테고리, 결제수단 필터링
    const isCategoryMatch = category === ALL_FILTER || item.category === category;
    const isPaymentMatch = payment === ALL_FILTER || item.payment === payment;

    // AND 조건
    return isTitleMatch && isMatchType && isCategoryMatch && isPaymentMatch;
  });
}

function resetDropdown(dropdown) {
  const button = dropdown.querySelector(".dropdown-btn");
  const icon = button.querySelector("img");
  const defaultValue = dropdown.querySelector(".dropdown-menu li").textContent.trim();

  button.textContent = defaultValue;
  button.appendChild(icon);
  dropdown.classList.remove("open");
}

// 필터 버튼 이벤트 연결
export function applyFilter({ applyBtn, resetBtn, titleInput, filterDropdowns, updateView }) {
  applyBtn.addEventListener("click", () => {
    // 최신 상태 렌더링
    updateView();
  });

  // 필터 초기화 기능
  resetBtn.addEventListener("click", () => {
    titleInput.value = "";
    filterDropdowns.forEach(resetDropdown);
    updateView();
  });
}
