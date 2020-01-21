# React - 09 ( redux )

### 한눈에 요약하는 redux



1. 액션

   - 액션에는 type 이 필요하며 액션의 이름이다

   - 그 외의 값들은 나중에 상태 업데이트를 할 때 참고해야 할 값이다

   - 액션 객체를 만드는 함수가 있으며, 이 것은 어떤 변화를 일으켜야 할 때 마다

     액션객체를 만들어야 하기 때문에 만들어서 사용

2. 리듀서 ( reducer )

   - 변화를 일으키는 ㅎ마수

   - 액션을 만들어서 발생시킴 

     -> 리듀서가 현재 상태와 전달받은 액션 객체를 para로 받음

     -> 그리고 두 값을 참고하여 새로운 상태를 만들어서 반환







### Chrome 에서 redux devTools  사용하기

1. redux dev tools 를 설치한다

2. `yarn add redux-devtools-extension` 

3. `import { composeWithDevTools } from 'redux-devtools-extension';` 을

   src/index.js 에 써주면 된다 . 







### 컨테이너 컴포넌트

- 컴포넌트를 리덕스와 연결하려면 connect 함수가 필요하다

- ```jsx
  connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
  ```

- `mapStateToProps` : 리덕스 스토어 안의 상태를 컴포넌트의  props로 넘겨주기 위해

  설정해주는 함수

- `mapDispatchToProps` : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수





### Redux 데이터 흐름

1. `store.dispatch(action)` 을 호출한다

   - 액션은 무엇이 일어날지 기술하는 보통의 오브젝트이다
     - ex ) " blur blur blur" 가 할 일 목록에 추가 되었습니다

2. Redux 스토어가 지정한 리듀서 함수를 호출한다

   - 스토어는 리듀서에 현재의 상태와 액션의 두 가지 인수를 넘긴다.

     ```jsx
      // 애플리케이션의 현재 상태(할일 목록과 선택된 필터)
      let previousState = {
        visibleTodoFilter: 'SHOW_ALL',
        todos: [{
          text: 'Read the docs.',
          complete: false
        }]
      };
     
      // 실행되는 액션(할일 추가)
      let action = {
        type: 'ADD_TODO',
        text: 'Understand the flow.'
      };
     
      // 리듀서가 다음 상태를 반환함
      let nextState = todoApp(previousState, action);
     ```

3. 루트 리듀서가 각 리듀서의 출력을 합쳐서 하나의 상태 트리로 만든다.

   - 루트리듀서 대신 `combineReducers()` 를 쓰면 더 편하다.

   - 예제 코드

     ```jsx
     /* combineReducers()의 작동 방식은 아래와 같습니다. 여러분이 두 개의 리듀서를 가지고 있다고 한다면, 하나는 할 일 목록, 한 개는 선택된 필터 설정 */ 
     
     function todos(state = [], action) {
        // Somehow calculate it...
        return nextState;
      }
     
      function visibleTodoFilter(state = 'SHOW_ALL', action) {
        // Somehow calculate it...
        return nextState;
      }
     
      let todoApp = combineReducers({
        todos,
        visibleTodoFilter
      });
     ```

     ```jsx
     /* 여러분이 액션을 보내면, combineReducers가 반환한 todoApp은 두 리듀서를 모두 호출합니다 */ 
     
      let nextTodos = todos(state.todos, action);
      let nextVisibleTodoFilter = visibleTodoFilter(state.visibleTodoFilter, action);
     ```

     

     ```jsx
     /* 그리고 두 결과를 합쳐서 하나의 상태 트리로 만듭니다: */ 
     
     return {
        todos: nextTodos,
        visibleTodoFilter: nextVisibleTodoFilter
      };
     ```

4. Redux 스토어가 루트 리듀서에 의해 반환된 상태 트리를 저장한다.

