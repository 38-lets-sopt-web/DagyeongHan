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
  addTitleInput,
  addDateInput,
  addAmountInput,
  addDropdowns,
  addModalContent,
  detailModalContent,
  detailTitle,
  detailAmount,
  detailDate,
  detailCategory,
  detailPayment,
  modalCloseBtn,
  modalTitle,
} from "./js/core/elements.js";
import { dropdownToggle } from "./js/event/dropdown.js";
import { renderData } from "./js/core/render.js";
import { applyFilter, getFilteredData } from "./js/form/filter.js";
import { applyDateSort, sortByDate } from "./js/event/dateSort.js";
import { handleSelect } from "./js/event/select.js";
import { addExpense } from "./js/form/addData.js";
import { viewDetail } from "./js/event/viewDetail.js";
import { renderTotalAmount } from "./js/core/total.js";
import { closeModal, openAddModal } from "./js/event/modal.js";

// 로컬 스토리지 데이터 가져오기
const expenseData = JSON.parse(localStorage.getItem("expenseData")) || [];

// 초기 정렬 상태 (내림차순)
let currentSortOrder = "desc";

function getDropdownValue(dropdown) {
  return dropdown.querySelector(".dropdown-btn").textContent.trim();
}

function getFilterValues() {
  const filters = {
    title: titleInput.value.trim().toLowerCase(),
  };

  filterDropdowns.forEach((dropdown) => {
    filters[dropdown.dataset.filter] = getDropdownValue(dropdown);
  });

  return filters;
}

function resetDropdown(dropdown, value = "선택") {
  const button = dropdown.querySelector(".dropdown-btn");
  const icon = button.querySelector("img");

  button.textContent = value;
  button.appendChild(icon);
}

function getAddExpenseForm() {
  const expenseForm = {
    title: addTitleInput.value.trim(),
    amount: Number(addAmountInput.value.trim()),
    date: addDateInput.value.trim(),
  };

  addDropdowns.forEach((dropdown) => {
    expenseForm[dropdown.dataset.expenseField] = getDropdownValue(dropdown);
  });

  return expenseForm;
}

function resetAddExpenseForm() {
  addTitleInput.value = "";
  addAmountInput.value = "";
  addDateInput.value = "";
  addDropdowns.forEach((dropdown) => resetDropdown(dropdown));
}

// 최신 상태 업데이트
function updateView() {
  // 필터링 된 데이터 가져오기
  const filteredData = getFilteredData({
    expenseData,
    filters: getFilterValues(),
  });

  const sortedData = sortByDate(filteredData, currentSortOrder); // 날짜 정렬
  renderData(expenseList, sortedData); // 다시 렌더링
  renderTotalAmount(totalAmount, expenseData); // 합계 업데이트
}

// 초기 렌더링
updateView();

// 헤더 아이콘 클릭 시 새로고침
headerIcon.addEventListener("click", () => {
  location.reload();
});

// 드롭다운 토글 기능 연결
dropdownToggle(dropdowns);

// 검색 필터 기능 연결
applyFilter({
  applyBtn,
  resetBtn,
  titleInput,
  filterDropdowns,
  updateView,
});

// 날짜 정렬 기능 연결
applyDateSort({
  sortDropdown,
  setSortOrder: (order) => {
    currentSortOrder = order;
  },
  updateView,
});

// 체크박스 선택 삭제 기능 연결
handleSelect({
  selectAllCheckbox,
  deleteBtn,
  expenseData,
  updateView,
  expenseList,
});

// 추가 버튼 클릭 시 내역 추가 모달 열림
addButton.addEventListener("click", () => {
  openAddModal({ modalTitle, addModalContent, detailModalContent, modalBackdrop });
});

// 모달 백드롭 클릭 시 모달 닫힘
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    closeModal({ modalBackdrop, addModalContent, detailModalContent });
  }
});

// 각 제목 항목 클릭 시 항목 상세 모달 열림
expenseList.addEventListener("click", (event) => {
  // 항목 상세 모달 기능
  viewDetail({
    event,
    expenseData,
    modalTitle,
    detailTitle,
    detailAmount,
    detailDate,
    detailCategory,
    detailPayment,
    addModalContent,
    detailModalContent,
    modalBackdrop
  });
});

// 상세 내역 모달 닫힘
modalCloseBtn.addEventListener("click", () => {
  closeModal({ modalBackdrop, addModalContent, detailModalContent });
});

// 내역 추가 기능 연결
addModalContent.addEventListener("submit", (e) => {
  // 브라우저 자동 새로고침 막음
  e.preventDefault();

  // 내역 추가
  const isAdded = addExpense({
    expenseData,
    expenseForm: getAddExpenseForm(),
  });

  // 추가 성공 시 업데이트 후 렌더링
  if (isAdded) {
    resetAddExpenseForm();
    updateView();
    // 모달 닫기
    closeModal({ modalBackdrop, addModalContent, detailModalContent });
  }
});

// 날짜 선택 input 아무데나 눌러도 날짜 선택 열리게
addDateInput.addEventListener("click", () => {
  addDateInput.showPicker();
});
