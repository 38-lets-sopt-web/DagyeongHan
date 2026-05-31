export function handleSelect({
  selectAllCheckbox,
  deleteBtn,
  expenseData,
  updateView,
  expenseList,
}) {
  // 체크박스 상태 업데이트
  const updateSelectAll = () => {
    const checkboxes = document.querySelectorAll("input[name='select']");
    const checkedCheckboxes = document.querySelectorAll("input[name='select']:checked");

    if (checkboxes.length === 0) {
      selectAllCheckbox.checked = false;
      return;
    }

    selectAllCheckbox.checked = checkboxes.length === checkedCheckboxes.length;
  };

  // 전체 선택 기능
  selectAllCheckbox.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("input[name='select']");

    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

 // 개별 체크박스 변경 시 전체 체크박스 상태 변경
  expenseList.addEventListener("change", (event) => {
    if (event.target.matches("input[name='select']")) {
      updateSelectAll();
    }
  });

  // 선택 삭제 기능
  deleteBtn.addEventListener("click", () => {
    const checkedItems = document.querySelectorAll("input[name='select']:checked"); // 체크된 항목
    const checkedIds = Array.from(checkedItems).map((item) => item.value); // 체크된 항목 id

    // 체크된 항목 있을 때만 동작
    if (checkedIds.length === 0) {
      return;
    }

    // 선택된 id만 제외하고 표시
    const updatedExpenseList = expenseData.filter((item) => {
      return !checkedIds.includes(String(item.id)); // 타입 비교 에러 방지
    });

    // 기존 배열 수정
    expenseData.length = 0;
    expenseData.push(...updatedExpenseList);

    // 로컬 스토리지 반영
    localStorage.setItem("expenseData", JSON.stringify(updatedExpenseList));

    // 최신 상태 렌더링
    updateView();
  });
}