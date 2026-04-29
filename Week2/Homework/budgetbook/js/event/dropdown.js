export function dropdownToggle(dropdowns) {
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
}
