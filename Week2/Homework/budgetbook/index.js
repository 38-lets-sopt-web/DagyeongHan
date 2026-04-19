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
import { addExpense } from "./js/addData.js";

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

// 내역 추가 기능 연결
addExpense({
  modalForm,
  modalTitleInput,
  modalAmountInput,
  modalDateInput,
  modalDropdowns,
  modalBackdrop,
  expenseData,
  expenseList,
  renderData,
});

// 합계 계산 기능
const total = expenseData.reduce((sum, item) => {
  return sum + item.amount;
}, 0);

// 합계 금액 색상
const { amountClass, amountValue } = customAmountStyle(total);
totalAmount.textContent = amountValue;
totalAmount.className = `total-amount ${amountClass}`;

// 날짜 선택 input 아무데나 눌러도 날짜 선택 열리게
modalDateInput.addEventListener("click", () => {
  modalDateInput.showPicker();
});
