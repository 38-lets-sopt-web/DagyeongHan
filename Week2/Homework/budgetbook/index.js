import "./dummy.js";
import { 
  addButton, 
  dropdowns, 
  headerIcon, 
  modalBackdrop, 
  expenseList, 
  selectAllCheckbox, 
  deleteBtn, 
  totalAmount, 
  sortDropdown,
  applyBtn,
  titleInput,
  filterDropdowns,
  resetBtn,
  modalTitleInput,
  modalDateInput,
  modalAmountInput,
  modalDropdowns,
  modalForm
} from "./js/elements.js";
import { dropdownToggle } from "./js/dropdown.js";
import { renderData } from "./js/render.js";
import { customAmountStyle } from "./js/utils.js";
import { applyFilter } from "./js/filter.js";

// 로컬 스토리지 데이터 가져오기
const expenseData = JSON.parse(localStorage.getItem("expenseData")) || [];

// 초기 데이터 렌더링
renderData(expenseList, expenseData);

// 헤더 아이콘 클릭 시 새로고침
headerIcon.addEventListener("click", () => {
  location.reload();
})

// 드롭다운 토글 기능 연결
dropdownToggle(dropdowns);

// 검색 필터 기능 연결
applyFilter({
  applyBtn,
  resetBtn,
  titleInput,
  filterDropdowns,
  expenseData,
  expenseList,
  renderData,
});

// 표 드롭다운 메뉴 요소 선택
const sortItems = sortDropdown.querySelectorAll(".dropdown-menu li");

// 정렬 기능
sortItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedValue = item.textContent.trim();
    const sortedData = [...expenseData]; // rest 문법 - 배열 복사

    if (selectedValue === "날짜 내림차순") {
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date)); // sort 함수
    } else if (selectedValue === "날짜 오름차순") {
      sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    renderData(expenseList, sortedData);
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
    return !checkedIds.includes(String(item.id)); // 타입 비교 에러 방지
  });

  // 로컬 스토리지 반영
  localStorage.setItem("expenseData", JSON.stringify(updatedExpenseList));

  // 새로고침
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

// 폼 제출(내역 추가 기능)
modalForm.addEventListener("submit", (e) => {
  // 브라우저 자동 새로고침 막음
  e.preventDefault();

  // 모달 내 입력값, 선택값 선언
  const modalTitleValue = modalTitleInput.value.trim();
  const modalAmountValue = Number(modalAmountInput.value.trim());
  const modalDateValue = modalDateInput.value.trim();
  const modalTypeValue = modalDropdowns[0].querySelector(".dropdown-btn").childNodes[0].textContent.trim();
  const modalCategoryValue = modalDropdowns[1].querySelector(".dropdown-btn").childNodes[0].textContent.trim();
  const modalPaymentValue = modalDropdowns[2].querySelector(".dropdown-btn").childNodes[0].textContent.trim();

  // 값 입력 누락 방지
  if (
    modalTitleValue === "" ||
    !modalAmountValue ||
    modalDateValue === "" ||
    modalTypeValue === "선택" ||
    modalCategoryValue === "선택" ||
    modalPaymentValue === "선택"
  ) {
    alert("모든 값을 입력해주세요.");
    return;
  }

  // 금액 값 초기화
  let amount = modalAmountValue;

  // 금액 지출, 수입 구분
  if (modalTypeValue === "지출 (-)") {
    amount = -modalAmountValue;
  }

  // 추가할 데이터 행 정의
  const newExpense = {
    id: Date.now(), // 고유 id로 선언
    title: modalTitleValue,
    amount: amount,
    date: modalDateValue,
    category: modalCategoryValue,
    payment: modalPaymentValue,
  }

  // 기존 데이터 배열에 추가
  expenseData.push(newExpense);
  // 로컬 스토리지에 반영
  localStorage.setItem("expenseData", JSON.stringify(expenseData));
  // 데이터 렌더링
  renderData(expenseList, expenseData);

  // 입력값 초기화
  modalTitleInput.value = "";
  modalAmountInput.value = "";
  modalDateInput.value = "";

  // 드롭다운 초기화
  modalDropdowns[0].querySelector(".dropdown-btn").childNodes[0].textContent = "선택";
  modalDropdowns[1].querySelector(".dropdown-btn").childNodes[0].textContent = "선택";
  modalDropdowns[2].querySelector(".dropdown-btn").childNodes[0].textContent = "선택";

  // 모달 닫기
  modalBackdrop.classList.remove("open");
})

// 날짜 선택 input 아무데나 눌러도 날짜 선택 열리게
modalDateInput.addEventListener("click", () => {
  modalDateInput.showPicker();
});
