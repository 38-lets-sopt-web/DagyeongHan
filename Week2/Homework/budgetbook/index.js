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
} from "./js/elements.js";
import { dropdownToggle } from "./js/dropdown.js";
import { renderData } from "./js/render.js";
import { customAmountStyle } from "./js/utils.js";
import { applyFilter } from "./js/filter.js";
import { applyDateSort } from "./js/dateSort.js";
import { handleSelect } from "./js/select.js";
import {
  addExpense,
  openDetailModal,
} from "./js/modal.js";

// 로컬 스토리지 데이터 가져오기
const expenseData = JSON.parse(localStorage.getItem("expenseData")) || [];

// 초기 데이터 렌더링
renderData(expenseList, expenseData);

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

// 추가 버튼 클릭 시 내역 추가 모달 열림
addButton.addEventListener("click", () => {
  addModalContent.style.display = "flex";
  detailModalContent.style.display = "none";
  modalTitle.textContent = "내역 추가";
  modalBackdrop.classList.add("open");
});

// 모달 백드롭 클릭 시 모달 닫힘
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    modalBackdrop.classList.remove("open");
    addModalContent.style.display = "none";
    detailModalContent.style.display = "none";
  }
});

// 각 제목 항목 클릭 시 항목 상세 모달 열림
expenseList.addEventListener("click", (event) => {
  // 클릭한 곳에서 가장 가까운 제목 항목 요소 찾기
  const titleButton = event.target.closest(".expense-title");

  // 제목 항목 요소 아니면 이벤트 종료
  if (!titleButton) return;

  // 제목 요소에 들어있는 id 값 추출
  const clickedId = Number(titleButton.dataset.id);
  // 배열에서 해당 id 항목 데이터 찾기
  const selectedItem = expenseData.find((item) => item.id === clickedId);

  // 해당 항목 없으면 종료
  if (!selectedItem) return;

  // 항목 상세 모달 열기 함수
  openDetailModal({
    selectedItem,
    modalTitle,
    detailTitle,
    detailAmount,
    detailDate,
    detailCategory,
    detailPayment,
    addModalContent,
    detailModalContent,
    modalBackdrop,
  });
});

// 상세 내역 모달 닫힘
modalCloseBtn.addEventListener("click", () => {
  modalBackdrop.classList.remove("open");
  addModalContent.style.display = "none";
  detailModalContent.style.display = "none";
});

// 내역 추가 기능 연결
addExpense({
  addModalContent,
  addTitleInput,
  addAmountInput,
  addDateInput,
  addDropdowns,
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
addDateInput.addEventListener("click", () => {
  addDateInput.showPicker();
});
