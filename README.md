# 이마트 사전과제



## 구현방향

- Component
  
  - 재사용이 필요한 요소인 상품 Card는 Component로 작성

- Data
  
  - 프로젝트 내 api폴더에 더미데이터를 작성
  
  - images unsplash의 무료 이미지 사용
  
  - invalid array length 에러로 19개까지 작성
    
    - backend에서 데이터를 받아오는 구조가 된다면 문제되지 않을 것이라 생각

- Icon
  
  - Fontawesome의 Icon들을 사용했음
  
  - 예시와 유사한 Icon을 사용하려 하였으나 solid 외에 제대로 작동하지 않는 경우가 많아 solid icon을 주로 사용.
  
  - 기능 명세서가 없는 button은 cursor:pointer css만 적용

- Scroll
  
  - Tab과 Card 두 부분에 구현함.
  
  - web이 아니라는 점에서 기본 scroll을 커스텀

- Pagination
  
  - 해당 list가 가지는 전체 page의 수(pageNum)와 현재 위치 페이지(nowNum)을 state로 작성
  
  - tab을 클릭할 때 마다 pageNum이 변화
  
  - 페이지의 각 숫자를 클릭할 때마다 nowNum이 변하고 출력 범위를 변화시킴
  
  - active class를 통해서 active된 페이지가 달라질 수 있게 구현
    
    - ui 외에도 cursor의 효과가 달라짐
    
    - map을 통해 pagination을 구성했기 때문에 getElementByClassName과 setAttribute를 통해서 해당 class를 제거하거나 부여함

- Tab
  
  - Tab의 경우 radio input과 label을 통해서 활성화 된 Tab의 ui를 표현
    
    - input checked에 따라서 ui 변화

- Dropdown
  
  - 예시와 달리 Dropdown을 Tab좌측에 표시함.
  
  - 우측이 잘리는 정도에 따라 Dropdown 버튼의 인지 여부가 달리질 것을 우려하여 수정

- Top Button
  
  - Scroll을 다 내렸을 때 Top Button을 누를 수 있도록 함.
  
  - 버튼에 기능 이름을 별도로 작성하지 않은 것이 앱에 더 적합하다 판단.

- 기타
  
  - 가능한 예시와 유사한 방향으로 작성
