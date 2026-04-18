import "./dummy.js";
import { 
  addButton, 
  dropdowns, 
  headerIcon, 
  modalBackdrop, 
  expenseList, 
  selectAllCheckbox, 
  deleteBtn, 
  totalAmount 
} from "./js/elements.js";
import { renderData } from "./js/render.js";
import { formatAmount, customAmountStyle } from "./js/utils.js";

// 로컬 스토리지 데이터 가져오기
const expenseData = JSON.parse(localStorage.getItem("expenseData")) || [];

// 초기 데이터 렌더링
renderData(expenseList, expenseData);

// 헤더 아이콘 클릭 시 새로고침
headerIcon.addEventListener("click", () => {
  location.reload(true);
})

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
addButton.addEventListener("click", () => {
  modalBackdrop.classList.add('open');
})

// 모달 백드롭 클릭 시 모달 닫힘
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    modalBackdrop.classList.remove("open");
  }
});

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
    return !checkedIds.includes(item.id);
  });

  // 로컬 스토리지 반영
  localStorage.setItem("expenseData", JSON.stringify(updatedExpenseList));
  location.reload();
});

// 합계 계산 기능
const total = expenseData.reduce((sum, item) => {
  return sum + item.amount;
}, 0);

// 합계 금액 색상
const { amountClass, amountValue } = customAmountStyle(total);
totalAmount.textContent = amountValue;
totalAmount.className = `total-amount ${amountClass}`;
