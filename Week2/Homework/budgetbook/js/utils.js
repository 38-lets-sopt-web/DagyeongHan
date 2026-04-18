// 숫자 포맷팅 함수
export function formatAmount(amount) {
  return amount.toLocaleString();
}

// 금액 스타일 커스텀
export function customAmountStyle(amount) {
  let amountClass = "";
  let amountValue = "";

  if (amount > 0) {
    amountClass = "amount-plus";
    amountValue = `+${formatAmount(amount)}`;
  } else {
    amountClass = "amount-minus";
    amountValue = formatAmount(amount);
  }

  return {
    amountClass,
    amountValue,
  };
}