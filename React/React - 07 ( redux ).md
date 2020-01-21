# React - redux ( 한 파일에 다 몰아서 )

### Redux 의 3가지 원칙

1. 단 한 개의 store만을 사용한다

2. State는 읽기 전용이다

   - 어플리케이션에서 state를 직접 변경할 수 없다.
   - state를 변경하기 위해서는 action 이 dispatch 되어야 한다.
   - action은 어떤 변화가 일어나야 할 지 알려주는 객체이다.

3. 변화는 순수 함수로 만들어져야 한다.

   - 2번에서 action 을 dispatch 하여 상태값을 변경한다고 하였다.

     이 과정에서 받아온 action 객체를 처리하는 함수를 Reducer 라고 한다.

   - action은 어떤 변화를 일어나야 할 지 알려주는 객체

   - Reducer는 그 정보를 받고 애플리케이션의 상태를 어떻게 바꿀지 정의한다고 볼 수 있다.

     - 외부 네트워크 혹은 데이터베이스에 접근하지 않아야한다.
     - return 값은 오직 parameter 값에만 의존되어야한다.
     - 인수는 변경되지 않아야한다.
     - 같은 인수로 실행된 함수는 언제나 같은 결과를 반환해야한다.
     - 순수하지 않은 API 호출을 하지 말아야 한다. (Date 및 Math 의 함수 등)



### Redux 시작하기

1. **redux**
2. **react-redux**: React.js 프로젝트에서 Redux 를 더 편하게 사용 할 수 있게 해줍니다.

- `npm install --save redux react-redux` 를 먼저 해준다



#### # index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// 모듈 불러오기 
```



#### # index.js ( action 작성 )

```jsx
/*
 * Action
 */
const INCREMENT = "INCREMENT";

function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}

// action 을 작성할 때에는 첫 번째 필드는 무조건 type 필드
// 필수적인 필드이며 , action의 형태를 나타내준다
// 그 다음부턴 개발자 마음 , 필요없으면생략 가능 

// type 은 action의 이름이다 
```



#### # index.js ( reducer 작성 )

```jsx
/* Reducer */
const initialState = {
    value: 0,
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value:state.value + action.addBy
            });
        default:
            return state;
    }
}

// reducer를 만들 때에는 우선 초기값을 설정해준다
// default 를 써준 이유는 해당 para가 undefined 되었을 경우에 initialState로 설정

```

- 위 코드에서 주의할 점!!!

> **주의 할 점**
>
> 우리는 state 를 변경시키지 않습니다. 단, [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 메소드를 통하여 state를 복사 한후, 복사된 객체를 수정하여 반환합니다.
>
> 첫번째 argument 는 꼭 비어있는 객체이어야 합니다.



#### # index.js ( stort 작성)

```jsx
const store = createStore(counterReducer);

// store 를 만들때는 createStore() 를 사용하며 reducer가 인수가 된다.
```



#### # index.js - ( App 컴포넌트 작성 )

```jsx
class App extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {

        let centerStyle = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect:'none',
            userSelect: 'none',
            cursor: 'pointer'
        };

        return (
            <div
                onClick={ this.onClick }
                style={ centerStyle }
            >

                <h1> {this.props.store.getState().value} </h1>
            </div>
        )
    }

    onClick() {
        this.props.store.dispatch(increase(1));
    }
}

// 이 컴포넌트는 렌더링 될 때, store 를 props로 전달받습니다.

// store.getState() :  현재 스토어에있는 데이터를 반환합니다.
// store.dispatch(ACTION) : 상태값을 수정 할 때 사용되는 메소드입니다. 인수로는 action 이 전달됩니다. 위 컴포넌트에서는 사전에 만들어둔 increase 함수가 action 객체를 반환합니다.
```



#### # index.js - ( 렌더링 )

```jsx
const render = () => {

    const appElement = document.getElementById('app');
    ReactDOM.render(
        <App store={store}/>,
        appElement
    );
};

store.subscribe(render);
render();

// LINE 5: store 를 App 컴포넌트의 props 로 전달해주었습니다.

// LINE 10: store.subscribe(LISTENER): dispatch 메소드가 실행되면 리스너 함수가 실행됩니다. 즉, 데이터에 변동이 있을때마다 리렌더링하도록 설정합니다.
```





