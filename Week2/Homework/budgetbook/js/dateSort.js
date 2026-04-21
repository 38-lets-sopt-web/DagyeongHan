// 정렬 기능 분리
export function sortByDate(data, order = "desc") {
  const sortedData = [...data];

  if (order === "desc") {
    sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return sortedData;
}

// 날짜 정렬 드롭다운 이벤트 연결
export function applyDateSort({
  sortDropdown,
  setSortOrder,
  updateView,
}) {
// 표 드롭다운 메뉴 요소 선택
  const sortItems = sortDropdown.querySelectorAll(".dropdown-menu li");

  // 데이터 정렬
  sortItems.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedValue = item.textContent.trim();

      if (selectedValue === "날짜 내림차순") {
        setSortOrder(expenseData, "desc")
      } else if (selectedValue === "날짜 오름차순") {
        setSortOrder(expenseData, "asc");
      }

      // 최신 상태 업데이트
      updateView();
    });
  });
}