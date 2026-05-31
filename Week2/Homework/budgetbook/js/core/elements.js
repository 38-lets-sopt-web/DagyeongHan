// 헤더 아이콘 요소 선택
export const headerIcon = document.querySelector("header div");

// 드롭다운 관련 요소 한번에 선택
export const dropdowns = document.querySelectorAll(".dropdown, .non-label-dropdown, .add-dropdown");
// 정렬 드롭다운 요소 선택
export const sortDropdown = document.querySelector(".non-label-dropdown");
// 필터 드롭다운 요소 모두 선택
export const filterDropdowns = document.querySelectorAll("main section .dropdown");
// 추가 모달 드롭다운 요소 전체 선택
export const addDropdowns = document.querySelectorAll(".modal .add-dropdown");

// 지출 목록 요소 선택
export const expenseList = document.querySelector(".expense-list");
// 총액 요소 선택
export const totalAmount = document.querySelector(".total-amount");
// 제목 input 요소 선택
export const titleInput = document.querySelector(".input input");
// 전체 선택 체크박스 요소 선택
export const selectAllCheckbox = document.querySelector("input[name='select-all']");

// 추가 버튼 요소 선택
export const addButton = document.querySelector(".add-btn");
// 삭제 버튼 요소 선택
export const deleteBtn = document.querySelector(".delete-btn");
// 적용 버튼 요소 선택
export const applyBtn = document.querySelector(".apply-btn");
// 초기화 버튼 요소 선택
export const resetBtn = document.querySelector(".reset-btn");

// 모달 배경 요소 선택
export const modalBackdrop = document.querySelector(".modal-backdrop");
// 공통 모달 제목 요소 선택
export const modalTitle = document.querySelector(".modal-title");
// 공통 모달 닫기 버튼 요소 선택
export const modalCloseBtn = document.querySelector(".modal-close-btn");

// 내역 추가 모달 요소 선택
export const addModalContent = document.querySelector(".modal-content-add");
// 내역 추가 모달 제목 입력 요소 선택
export const addTitleInput = document.querySelector(".add-title-input");
// 내역 추가 모달 날짜 선택 요소 선택
export const addDateInput = document.querySelector(".add-date-input");
// 내역 추가 모달 금액 입력 요소 선택
export const addAmountInput = document.querySelector(".add-amount");

// 내역 상세 모달 요소 선택
export const detailModalContent = document.querySelector(".modal-content-detail");
// 상세 모달 제목 값 요소 선택
export const detailTitle = document.querySelector(".detail-title");
// 상세 모달 금액 값 요소 선택
export const detailAmount = document.querySelector(".detail-amount");
// 상세 모달 날짜 값 요소 선택
export const detailDate = document.querySelector(".detail-date");
// 상세 모달 카테고리 값 요소 선택
export const detailCategory = document.querySelector(".detail-category");
// 상세 모달 결제수단 값 요소 선택
export const detailPayment = document.querySelector(".detail-payment");
