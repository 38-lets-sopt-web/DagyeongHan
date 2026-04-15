// 요소 선택
const input = document.querySelector('.input');
const addButton = document.querySelector('.add-button');
const list = document.querySelector('.list');

// 로컬 스토리지에서 가져오기
let todoLists = JSON.parse(localStorage.getItem('todoLists')) || [];

// 초기화 - for문
for (let i = 0; i < todoLists.length; i++) {
  const li = document.createElement('li');
  li.textContent = todoLists[i];
  list.appendChild(li);
}

// 버튼 클릭 이벤트
addButton.addEventListener('click', () => {
  const value = input.value;

  if (!value) return;

  // 리스트 추가
  const li = document.createElement('li');
  li.textContent = value;
  list.appendChild(li);

  // 로컬 스토리지에 저장
  todoLists.push(value);
  localStorage.setItem('todoLists', JSON.stringify(todoLists));

  // input 초기화
  input.value = '';
});