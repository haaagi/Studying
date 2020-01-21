# React - 08 ( Redux )

<u>studying/Prac11 을 참고</u>

*action -> reducer -> store -> components  순으로 작성한다.* 

#### # actions/index.js - action 작성 

```jsx
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value
    };
}
```



#### # reducers/index.js - reducer 작성

```jsx
import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: 0,
    diff: 1
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const counterApp = combineReducers({
    counter,
    extra
});

export default counterApp;

// LINE 2: combineReducers 는 여러개의 reducer를 한개로 합칠 때 사용 되는 redux 내장 메소드

// LINE 36 – 39: combineReducers 를 사용 할 땐 이렇게 사용한다
```



- `combineReducer` 를 사용할 때 각 reducer 에 다른 key 값을 주고 싶다면 아래와 같이 사용

```jsx
const counterApp = combineReducers({
    a: counter,
    b: extra
});
```



#### # components/Counter.js

```jsx
import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return (
            <h1>VALUE: { this.props.value }</h1>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
}

Counter = connect(mapStateToProps)(Counter);

export default Counter;
```

> #### # connect API [(자세히..)](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)
>
> ```
> connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
> ```
>
> **connect**는 react-redux 의 내장 API 입니다. 이 함수는 React Component 를 **Redux Store**에  ‘연결’ 해줍니다.
>
> 이 함수의 리턴값은 특정 컴포넌트 클래스의 props 를 store의 데이터에 연결시켜주는 **또 다른 함수**를 리턴합니다.
>
> 리턴된 함수에 컴포넌트를 인수로 넣어 실행하면, 기존 컴포넌트를 **수정**하는게 아니라 **새로운 컴포넌트를 return** 합니다.
>
> **인수:**
>
> **mapStateToProps**(state, [ownProps]): *(Function)* store 의 state 를 컴포넌트의 props 에 매핑 시켜줍니다. ownProps 인수가 명시될 경우, 이를 통해 함수 내부에서 컴포넌트의 props 값에 접근 할 수 있습니다.
>
> **mapDispatchToProps**(dispatch, [ownProps]): *(Function or Object)* 컴포넌트의 특정 함수형 props 를 실행 했을 때, 개발자가 지정한 action을 dispatch 하도록 설정합니다. ownProps의 용도는 위 인수와 동일합니다.
>
> mapDispatchToProps 를 객체형으로 전달하는 방법 및 기타 인수들은 [매뉴얼](https://reactcommunity.org/redux/docs/api/bindActionCreators.html)을 참조해주세요.

- **LINE 2:** connect 를 react-redux 에서 불러옵니다.
- **LINE 12 – 16**: mapStateToProps 는 이런식으로 arrow functions 를 사용해서 작성합니다.
- **LINE 18**: 위에서 만든 mapStateToProps 를 사용하여 컴포넌트를 store에 연결시킵니다.





