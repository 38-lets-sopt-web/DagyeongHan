const DEFAULT_DROPDOWN_VALUE = "선택";
const EXPENSE_TYPE = "지출 (-)";

// 내역 추가 기능 함수
export function addExpense({ expenseData, expenseForm }) {
  const { title, amount, date, type, category, payment } = expenseForm;

  // 값 입력 누락 방지
  if (
    title === "" ||
    !amount ||
    date === "" ||
    type === DEFAULT_DROPDOWN_VALUE ||
    category === DEFAULT_DROPDOWN_VALUE ||
    payment === DEFAULT_DROPDOWN_VALUE
  ) {
    alert("모든 값을 입력해주세요.");
    return false;
  }

  // 금액 지출, 수입 구분
  const signedAmount = type === EXPENSE_TYPE ? -amount : amount;

  // 추가할 데이터 정의
  const newExpense = {
    id: Date.now(),
    title,
    amount: signedAmount,
    date,
    category,
    payment,
  };

  // 기존 데이터 배열에 추가
  expenseData.push(newExpense);
  // 로컬 스토리지에 반영
  localStorage.setItem("expenseData", JSON.stringify(expenseData));

  return true;
}
