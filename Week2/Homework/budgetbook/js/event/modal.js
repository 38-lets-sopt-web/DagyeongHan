// 공통 모달 닫기
export function closeModal({
  modalBackdrop,
  addModalContent,
  detailModalContent,
}) {
  modalBackdrop.classList.remove("open");
  addModalContent.style.display = "none";
  detailModalContent.style.display = "none";
}

// 내역 추가 모달 열기
export function openAddModal({
  modalTitle,
  addModalContent,
  detailModalContent,
  modalBackdrop,
}) {
  addModalContent.style.display = "flex";
  detailModalContent.style.display = "none";
  modalTitle.textContent = "내역 추가"; // 모달 헤더 제목 설정
  modalBackdrop.classList.add("open");
}

// 항목 상세 모달 열기
export function openDetailModal({
  modalTitle,
  detailTitle,
  detailAmount,
  detailDate,
  detailCategory,
  detailPayment,
  addModalContent,
  detailModalContent,
  modalBackdrop,
  selectedItem,
}) {
  // 각 항목 값 세팅
  detailTitle.textContent = selectedItem.title;
  detailAmount.textContent = `${selectedItem.amount.toLocaleString()}원`;
  detailDate.textContent = selectedItem.date;
  detailCategory.textContent = selectedItem.category;
  detailPayment.textContent = selectedItem.payment;

  // 항목 상세 요소 열기
  addModalContent.style.display = "none";
  detailModalContent.style.display = "flex";
  modalTitle.textContent = "항목 상세"; // 모달 헤더 제목 설정
  modalBackdrop.classList.add("open");
}