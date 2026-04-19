export function handleSelect({
  selectAllCheckbox,
  deleteBtn,
  expenseData,
}) {
  // 전체 선택 기능
  selectAllCheckbox.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("input[name='select']");

    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  // 선택 삭제 기능
  deleteBtn.addEventListener("click", () => {
    const checkedItems = document.querySelectorAll("input[name='select']:checked"); // 체크된 항목
    const checkedIds = Array.from(checkedItems).map((item) => item.value); // 체크된 항목 id

    // 선택된 id만 제외하고 표시
    const updatedExpenseList = expenseData.filter((item) => {
      return !checkedIds.includes(String(item.id)); // 타입 비교 에러 방지
    });

    // 로컬 스토리지 반영
    localStorage.setItem("expenseData", JSON.stringify(updatedExpenseList));

    // 새로고침
    location.reload();
  });
}