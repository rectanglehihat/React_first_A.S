# 아무말 사전을 만들어 보자


## 1. 페이지 확인(와이어 프레임 확인)
  * 각 페이지별 구현 기능 파악
  * 사전이 보이는 페이지
    - 사전카드들이 보여진다.
    - 플러스 버튼을 눌렀을 때 추가하기 페이지로 이동해야한다.
  * 사전 추가하는 페이지
    - 각 입력창을 담당하는 카드 3개가 있다.
    - 각 input박스에 입력하고 추가하기 버튼을 누르면 사전이 보이는 페이지로 이동한다.
    - 그리고 입력된 내용이 카드형태로 추가된다.


## 2. 뷰 만들기 및 기능구형
    * 필요한 패키지 다운로드(yarn add)
      react-router-dom
      styled-components
      redux react-redux
      redux-thunk
      firebase
      (material-ui)
      
  * 페이지별로 컴포넌트를 만들어 뷰 껍데기 만들기
  * 라우팅으로 페이지 나누고 연결 잘 되는지 확인
  * styled-components로 css하기
  * 기능구현
    - 페이지 만들기: 사전이 보이는 페이지
        + 임시데이터(가짜 데이터) 3-4개 만들기
        + 함수형 컴포넌트라면 useState로 상태관리(리덕스로 관리가 넘어가면 useSelector로 관리)
        + return 안에 뷰(반환할 리액트 요소)만들기 -> 반복되니 맵함수 사용
        + state에 값 추가되는지 보기 위해 임시버튼 만들고 {함수}넣어서 실행해보기 
 
    - 페이지 만들기: 추가하는 페이지
        + useRef를 이용해 input의 데이터 받아오고 잘 나오는지 콘솔 확인
  
  
## 3. 리덕스로 상태관리하기
  * 리덕스 사용으로 상태 관리를 컴포넌트 밖에서 한다.
  * 리덕스 모듈을 js파일로 만든다.
    - Action: 데이터 변경 시 발생(액션은 객체) -> dispatch함수로 Action을 스토어에 전달함
    - initialState: is_loaded: false를 추가해(리듀서는 true) 새로고침시 initioalState가 안보이도록 한다.
    - Action Creators: export해서 쓸 때 액션 블러오는 함수 
    - Reducer
        + 리덕스에 저장된 상태(데이터) 변경 함수로 state(현재상태)와 action(액션객체)를 파라미터로 받는다.
        + 액션 객체를 받으면 전달받은 액션의 타입에 따라 상태 업데이트 해야하는지 정의한다. 즉, 업데이트 로직을 정의하는 함수.
  * 리덕스 스토어
    - 상태(데이터)가 있는 곳.
    - 스토어에 상태값 변화를 알리고 스토어는 이를 다른 컴포넌트들에게 전달한다.


## 4. 파이어베이스로 서버리스 작업하기
