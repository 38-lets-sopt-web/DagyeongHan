import "./dummy.js";

// 더미데이터 불러와서 로컬 스토리지 저장
const expenseData = JSON.parse(localStorage.getItem("expenseData")) || [];

// 표 가져오기
const expenseList = document.querySelector('.expense-list');

// 표에 더미데이터 렌더링
expenseList.innerHTML = expenseData.map((item) => {
  let amountClass = "";
  let amountValue = "";

  if (item.amount > 0) {
    amountClass = "amount-plus";
    amountValue = `+${item.amount}`;
  } else {
    amountClass = "amount-minus";
    amountValue = item.amount;
  }

  return `
    <tr>
      <td><input type="checkbox" name="select" value="${item.id}" /></td>
      <td>${item.title}</td>
      <td class="${amountClass}">${amountValue}</td>
      <td>${item.date}</td>
      <td>${item.category}</td>
      <td>${item.payment}</td>
    </tr>
  `;
}).join("");