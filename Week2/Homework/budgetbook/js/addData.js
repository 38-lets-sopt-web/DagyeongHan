import { openAddModal } from "./modal.js";

// 내역 추가 기능 함수
export function addExpense({
  addTitleInput,
  addAmountInput,
  addDateInput,
  addDropdowns,
  expenseData,
  expenseList,
  renderData,
}) {
  // 모달 내 입력값, 선택값 선언
  const addTitleValue = addTitleInput.value.trim();
  const addAmountValue = Number(addAmountInput.value.trim());
  const addDateValue = addDateInput.value.trim();
  const addTypeValue = addDropdowns[0].querySelector(".dropdown-btn").childNodes[0].textContent.trim();
  const addCategoryValue = addDropdowns[1].querySelector(".dropdown-btn").childNodes[0].textContent.trim();
  const addPaymentValue = addDropdowns[2].querySelector(".dropdown-btn").childNodes[0].textContent.trim();

  // 값 입력 누락 방지
  if (
    addTitleValue === "" ||
    !addAmountValue ||
    addDateValue === "" ||
    addTypeValue === "선택" ||
    addCategoryValue === "선택" ||
    addPaymentValue === "선택"
  ) {
    alert("모든 값을 입력해주세요.");
    return false;
  }

  // 금액 값 초기화
  let amount = addAmountValue;

  // 금액 지출, 수입 구분
  if (addTypeValue === "지출 (-)") {
    amount = -addAmountValue;
  }

  // 추가할 데이터 행 정의
  const newExpense = {
    id: Date.now(), // 고유 id로 선언
    title: addTitleValue,
    amount: amount,
    date: addDateValue,
    category: addCategoryValue,
    payment: addPaymentValue,
  }

  // 기존 데이터 배열에 추가
  expenseData.push(newExpense);
  // 로컬 스토리지에 반영
  localStorage.setItem("expenseData", JSON.stringify(expenseData));
  // 데이터 렌더링
  renderData(expenseList, expenseData);

  // 입력값 초기화
  addTitleInput.value = "";
  addAmountInput.value = "";
  addDateInput.value = "";

  // 드롭다운 초기화
  addDropdowns[0].querySelector(".dropdown-btn").childNodes[0].textContent = "선택";
  addDropdowns[1].querySelector(".dropdown-btn").childNodes[0].textContent = "선택";
  addDropdowns[2].querySelector(".dropdown-btn").childNodes[0].textContent = "선택";

  return true;
}
