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
import { applyDateSort } from "./js/dateSort.js";
import { handleSelect } from "./js/select.js";

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

// 날짜 정렬 기능 연결
applyDateSort({
  sortDropdown,
  expenseData,
  expenseList,
  renderData,
});

// 체크박스 선택 삭제 기능 연결
handleSelect({
  selectAllCheckbox,
  deleteBtn,
  expenseData,
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
