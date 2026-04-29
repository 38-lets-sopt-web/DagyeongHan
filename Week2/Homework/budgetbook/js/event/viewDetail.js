import { openDetailModal } from "./modal.js";

export function findExpense(event, expenseData) {
  // 클릭한 곳에서 가장 가까운 제목 항목 요소 찾기
  const titleButton = event.target.closest(".expense-title");

  // 제목 항목 요소 아니면 이벤트 종료
  if (!titleButton) return null;

  // 제목 요소에 들어있는 id 값 추출
  const clickedId = Number(titleButton.dataset.id);
  // 배열에서 해당 id 항목 데이터 찾기
  const selectedItem = expenseData.find((item) => item.id === clickedId);

  // 해당 항목 없으면 종료
  if (!selectedItem) return null;

  return selectedItem;
}

// 항목 상세 모달 보기 함수
export function viewDetail({
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
  modalBackdrop,
}) {
  // 각 항목 데이터 찾기
  const selectedItem = findExpense(event, expenseData);

  // 못 찾으면 종료
  if (!selectedItem) return false;

  // 항목 상세 모달 열기
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

  return true;
}
