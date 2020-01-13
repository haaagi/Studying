# React - 02 ( LifeCycle 정리)

## LifeCycle API

### 컴포넌트 초기생성

#### 1. componentDidMount

- 컴포넌트가 화면에 나타나게 됐을 때 호출된다. 

- 해당 컴포넌트에서 필요로 하는 데이터를 요청하기 위해 axios, fetch 등을 통하여 ajax 요청을

  하거나 DOM의 속성을 읽거나 직접 변경하는 작업을 진행한다.



### 컴포넌트 업데이트

컴포넌트의 업데이트는 props 의 변화, state 의 변화에 따라 결정된다

#### 1. componentWillReceiveProps

- 새로운 props 를 받게 됐을 때 호출 된다.

- 주로 state가 props에 따라 변해야 하는 로직 작성

- 새로 받게 될 props는 nextProps로 조회 할 수 있음, 이 때, `this.props`를 조회하면 업데이트

  되기 전의 API이니 참고

- 하지만 이거도 다른거로 대체된다



#### 2. static getDerivedStateFromProps()

- props로 받아온 값을 state 로 동기화 하는 작업을 해줘야 하는 경우에 사용된다.

```jsx
static getDerivedStateFromProps(nextProps, prevState) {
  // 여기서는 setState 를 하는 것이 아니라
  // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
  // 사용됩니다.
  /*
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  */
}
```



#### 3. getSnapshotBeforeUpdate()

```
이 api 가 발생하는 시점은 다음과 같다
1. render()
2. getSnapshotBeforeUpdate()
3. 실제 DOM 에 변화 발생
4. componentDidUpdate
```

ex ) 예시코드 

```jsx
 getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM 업데이트가 일어나기 직전의 시점입니다.
    // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
    // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
    // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데, 
    // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
    if (prevState.array !== this.state.array) {
      const {
        scrollTop, scrollHeight
      } = this.list;

      // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
      return {
        scrollTop, scrollHeight
      };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const { scrollTop } = this.list;
      if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않습니다.
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      this.list.scrollTop += diff;
    }
  }
```



### 컴포넌트에 에러 발생

#### 1. componentDidCatch

```jsx
componentDidCatch(error, info) {
  this.setState({
    error: true
  });
}
```

- 에러가 발생하면 위의 함수가 실행되게 하고, `state.error`를 true로 설정하게 하고 

  render 함수 쪽에서 에러를 띄워주면 된다. 