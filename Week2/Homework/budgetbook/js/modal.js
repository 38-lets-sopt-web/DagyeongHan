// 내역 추가 기능 함수
export function addExpense({
  addModalContent,
  addTitleInput,
  addAmountInput,
  addDateInput,
  addDropdowns,
  modalBackdrop,
  expenseData,
  expenseList,
  renderData,
}) {
// 폼 제출(내역 추가 기능)
  addModalContent.addEventListener("submit", (e) => {
    // 브라우저 자동 새로고침 막음
    e.preventDefault();

    // 모달 내 입력값, 선택값 선언
    const addTitleValue = addTitleInput.value.trim();
    const addAmountValue = Number(addAmountInput.value.trim());
    const addDateValue = addDateInput.value.trim();
    const addTypeValue = addDropdowns[0].querySelector(".dropdown-btn").childNodes[0].textContent.trim();
    const addCategoryValue = addDropdowns[1].querySelector(".dropdown-btn").childNodes[0].textContent.trim();
    const addPaymentValue = addDropdowns[2].querySelector(".dropdown-btn").childNodes[0].textContent.trim();

    // 값 입력 누락 방지
    if (
      addTitleValue === "" ||
      !addAmountValue ||
      addDateValue === "" ||
      addTypeValue === "선택" ||
      addCategoryValue === "선택" ||
      addPaymentValue === "선택"
    ) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    // 금액 값 초기화
    let amount = addAmountValue;

    // 금액 지출, 수입 구분
    if (addTypeValue === "지출 (-)") {
      amount = -addAmountValue;
    }

    // 추가할 데이터 행 정의
    const newExpense = {
      id: Date.now(), // 고유 id로 선언
      title: addTitleValue,
      amount: amount,
      date: addDateValue,
      category: addCategoryValue,
      payment: addPaymentValue,
    }

    // 기존 데이터 배열에 추가
    expenseData.push(newExpense);
    // 로컬 스토리지에 반영
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
    // 데이터 렌더링
    renderData(expenseList, expenseData);

    // 입력값 초기화
    addTitleInput.value = "";
    addAmountInput.value = "";
    addDateInput.value = "";

    // 드롭다운 초기화
    addDropdowns[0].querySelector(".dropdown-btn").childNodes[0].textContent = "선택";
    addDropdowns[1].querySelector(".dropdown-btn").childNodes[0].textContent = "선택";
    addDropdowns[2].querySelector(".dropdown-btn").childNodes[0].textContent = "선택";

    // 모달 닫기
    modalBackdrop.classList.remove("open");
  });
}

// 항목 상세 모달 열기 함수
export function openDetailModal({
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
}) {
  // 모달 헤더 제목 텍스트 설정
  modalTitle.textContent = "항목 상세";

  // 각 상세 항목 값 세팅
  detailTitle.textContent = selectedItem.title;
  detailAmount.textContent = `${selectedItem.amount.toLocaleString()}원`;
  detailDate.textContent = selectedItem.date;
  detailCategory.textContent = selectedItem.category;
  detailPayment.textContent = selectedItem.payment;

  // 항목 상세 요소 열기
  addModalContent.style.display = "none";
  detailModalContent.style.display = "flex";
  modalBackdrop.classList.add("open");
}