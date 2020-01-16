# React - 04 ( hook )

```jsx
const [value, setValue] = useState(0);
```

- 이건 배열 비구조화 할당 문법이다. 

- 예시를 들면

  - ```jsx
    const array = ['dog', 'cat', 'sheep'];
    const [first, second] = array;
    console.log(first, second); // dog cat
    ```

    이렇게 나오게 된다

```jsx
const [value, setValue] = useState(0);

// 코드를 분석해 보자면 이 함수의 파라미터에는 상태의 기본값을 넣어준다
// 우리는 현재 0을 넣어주었다. 즉 카운터의 기본값을 0으로 설정
// 이 함수가 호출되면 배열을 반환하는데 
// 그 배열의 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수이다
```



- useState 함수는 하나의 상태 값만 관리를 할 수 있기 때문에 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러번 사용하면 된다

- ```jsx
  const Info = () => {
      const [name, setName ] = useState('');
      const [nickname, setNickname] = useState('');
  // 이런식으로 만들어준다 
      const onChangeName = e => {
          setName(e.target.value);
      };
      const onChangeNickname = e => {
          setNickname(e.target.value);
        };
  }
  ```





### useEffect

##### 1. 렌더링 될 때마다 수행하고 싶을 때

- `useEffect` 사용 

- 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 이다

- 클래스형 컴포넌트의 `componentDidMount` 와 `componentDidUpdate` 를 합친 형태로 보아도된다

  - ```jsx
    useEffect(() => {
            console.log('렌더링 완료!');
            console.log({
                name,
                nickname
                });
            }
    ```

##### 2. 마운트 될 때마다 수행하고 싶을 때

- `useEffect` 에서 설정한 함수가 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고

  업데이트 할 경우에는 실행할 필요가 없는 경우엔 

  함수의 두 번째 파라미터로 비어있는 배열을 넣어준다

  - ```jsx
    useEffect(() => {
        console.log('마운트 될 때만 실행됩니다.');
      }, []);
    ```



##### 3. 특정 값이 업데이트 될 때만 실행하고 싶을 경우

- `useEffect` 의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어준다

  - ```jsx
    useEffect(() => {
        console.log(name);
      }, [name]);
    ```

##### 

##### 4. 뒷정리 하기 

- `useEffect` 는 기본적으로 렌더링 되고난 직후마다 실행되며, 두 번째 파라의 배열에 무엇을 넣느야에 따라 실행되는 조건이 달라진다.

- 만약 컴퍼넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면

  `useEffect` 에서 뒷정리(cleanup) 함수를 반환해주어야 한다

  - ```jsx
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
          console.log('cleanup');
          console.log(name);
        };
      });
    ```



### useMemo

- 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다 

```jsx
import React, { useState } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중...');
    if ( numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList ] = useState([]);
    const [ number, setNumber ] = useState('');
    
    const onChange = e => {
        setNumber(e.target.value);
    };
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    return ( 
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) =>(
                    <li key={index}>{value}</li>
                    ) 
                )}
            </ul>
            <div>
                <b>평균 값:</b> {getAverage(list)}
            </div>
        </div>
    )
}

export default Average;
```

- 이렇게 해준다면 인풋값이 수정될 때마다 `getAverage` 가 실행되어 별로 좋지않다

  해결 하려면 `useMemo` 를 사용해준다

&& 해결 코드

```jsx
import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
```





