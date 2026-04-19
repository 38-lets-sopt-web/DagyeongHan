export function applyDateSort({
  sortDropdown,
  expenseData,
  expenseList,
  renderData,
}) {
// 표 드롭다운 메뉴 요소 선택
  const sortItems = sortDropdown.querySelectorAll(".dropdown-menu li");

  // 정렬 기능
  sortItems.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedValue = item.textContent.trim();
      const sortedData = [...expenseData]; // rest 문법 - 배열 복사

      if (selectedValue === "날짜 내림차순") {
        sortedData.sort((a, b) => new Date(b.date) - new Date(a.date)); // sort 함수
      } else if (selectedValue === "날짜 오름차순") {
        sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
      }

      renderData(expenseList, sortedData);
    });
  });
}