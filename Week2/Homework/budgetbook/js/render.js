import { customAmountStyle } from "./utils.js";

// 데이터 렌더링 함수
export function renderData(expenseList, data) {
  expenseList.innerHTML = data.map((item) => {
    const { amountClass, amountValue } = customAmountStyle(item.amount);

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
}