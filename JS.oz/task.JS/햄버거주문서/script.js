/*
기본 요구사항
- 
1. ‘햄버거 주문서’ 를 클릭하면 `classList.toggle()` 메서드를 통해 ‘추가’, ‘제거’ 버튼이 토글 됩니다.
2. 햄버거 아이템 리스트 배열을 생성해줍니다. 
3. 추가 버튼을 클릭하면 배열 리스트 1개가 추가 됩니다.
4. 이때 배열 리스트의 값은 추가 버튼 누를 때 마다 숫자가 1개씩 증가 됩니다. 
5. 제거 버튼을 클릭하면 배열 리스트의 값 중 마지막 값 1개가 제거됩니다.
6. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
7. 스타일은 마음껏 수정해도 좋습니다.
*/

// 아이템 리스트 배열
/*TODO:햄버거 아이템 리스트 배열을 생성해줍니다. */

/* 오류내용 24.4.16
버튼이 동작하지 않아서 addButton과 removeButton변수를 만들어서 실행했음 - 결과 = 버튼동작 안됨
오타가 있나 살펴봤지만 오타도 없음.
html문서의 자바스크립트 위치도 바꿔봤지만 버튼 실행안됨.
콘솔 에러 메세지 cannot read 'addEventListener'뜸
원인 : html 문서에 '#title' 할당이 안되있어서 토글 메서드 실행시 에러로 실행이안됨
해결방안 : html 문서 <h2>에 타이틀 아이디 할당으로 문제 해결됨
*/
//const addButton = document.getElementById('addButton')
//const removeButton = document.getElementById('removeButton')
let items = [];

// 아이템 추가 버튼 클릭 시 호출되는 함수
function addItem() {
  let newItem = `햄 ${items.length + 1}`;
  items.push(newItem);
  renderItems();

  /*
TODO:추가 버튼을 클릭하면 배열 리스트 1개가 추가 됩니다.
이때 배열 리스트의 값은 추가 버튼 누를 때 마다 숫자가 1개씩 증가 됩니다. 
*/
}

// 아이템 제거 버튼 클릭 시 호출되는 함수
function removeItem() {
  if (items.length > 0) {
    items.pop();
    renderItems();
  }
  /*
TODO: 제거 버튼을 클릭하면 배열 리스트의 값 중 마지막 값 1개가 제거됩니다.
*/
}

// 아이템 리스트 렌더링 함수
function renderItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';
  /*
TODO: 아이템 리스트 초기화하는 함수를 만들어주세요.
*/

  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
    /*
    TODO: 배열의 각 아이템을 순회하며 리스트에 추가하는 함수를 만들어주세요.
      */
  });
}

//title '햄버거 주문서' 클릭 시 classList.toggle()메서드 실행
const title = document.getElementById('title');
title.addEventListener('click', function () {
  addButton.classList.toggle('show');
  removeButton.classList.toggle('show');
  /*
TODO: style.css 파일의 .show class를 이용하여 토글 기능을 만들어주세요!
*/
});

// 아이템 추가 및 제거 버튼 이벤트 핸들러
document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('removeButton').addEventListener('click', removeItem);
