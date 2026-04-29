import { customAmountStyle } from "./utils.js";

// total 계산 함수
export function renderTotalAmount(totalAmount, expenseData) {
  // 합계 계산 기능
  const total = expenseData.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  // 합계 금액 색상
  const { amountClass, amountValue } = customAmountStyle(total);
  totalAmount.textContent = amountValue;
  totalAmount.className = `total-amount ${amountClass}`;
}
