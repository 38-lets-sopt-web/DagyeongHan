import "./dummy.js";

// 드롭다운 관련 요소 한번에 선택
const dropdowns = document.querySelectorAll(".dropdown, .non-label-dropdown, .form-dropdown");

// 드롭다운 기능
dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".dropdown-btn");
  const menuItems = dropdown.querySelectorAll(".dropdown-menu li");
  const icon = button.querySelector("img");

  button.addEventListener("click", (event) => {
    event.stopPropagation(); // 클릭 이벤트 제한

    dropdowns.forEach((item) => {
      if (item !== dropdown) {
        item.classList.remove("open"); // 클릭한 메뉴만 open
      }
    });

    dropdown.classList.toggle("open"); // 토글 기능
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();

      // 메뉴 항목 selectedValue에 저장 + 공백 제거
      const selectedValue = item.textContent.trim();

      button.textContent = selectedValue; // 버튼 텍스트 selectedValue로 교체
      button.appendChild(icon); // 아이콘 유지

      dropdown.classList.remove("open"); // 드롭다운 메뉴 닫음
    });
  });
});

// 드롭다운 바깥 클릭해도 메뉴 닫힘
document.addEventListener("click", () => {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("open");
  });
});

// 추가 버튼 클릭 시 모달 열림
const addButton = document.querySelector(".add-btn");
const modalBackdrop = document.querySelector(".modal-backdrop");

addButton.addEventListener("click", () => {
  modalBackdrop.classList.add('open');
})

// 모달 백드롭 클릭 시 모달 닫힘
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    modalBackdrop.classList.remove("open");
  }
});

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