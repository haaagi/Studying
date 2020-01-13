# React - 01

### 프로젝트 생성하기

```bash
npm install -g create-react-app // npm으로 설치하기

yarn global add create-react-app // yarn 으로 설치하기

설치하고 
create-react-app <app 이름> 이러면 초기 세팅 끝
```





### 처음 생성했을 때 code 분석

#### App.js

![image-20200113111657160](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20200113111657160.png)

- component 와 JSX를 쓰려면 첫 줄처럼 해줘야 한다. 

- 이렇게 import 를 하는 것은 webpack을 사용하기에 가능한 작업이다. 

  이렇게 불러오고나면 나중에 프로젝트를 빌드하게 되면 웹팩에서 파일의 확장자에 따라 

  다른 작업을 하게된다.



![image-20200113111959424](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20200113111959424.png)

- 우리가 작성한 컴포넌트를 다른 곳에서 불러와서 사용할 수 있도록 내보내기



#### index.js



![image-20200113112638307](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20200113112638307.png)

- 브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해서는 `ReactDOM.render` 함수를 사용해야한다.
- 첫 번째 para는 렌더링 할 결과물
- 두 번째 para는 컴포넌트를 어떤 DOM에 그릴지 정한다. 

- 여기서는 public/index.html 에 있고, 거기 안에 

  ```html
  <div id="root"></div> // 이게 있다
  ```

  

#### 새롭게 작성해보기

![image-20200113115617678](C:\Users\multicampus\AppData\Roaming\Typora\typora-user-images\image-20200113115617678.png)

- 이렇게 vue 처럼 react도 return 안에 하나의 div 만 존재해야 한다. 
- div 가 별로라면 위에처럼 `<Fragment></Fragment>` 가능



#### JSX의 조건문

- JSX 에서는 if 문을 사용하지 않는다

  ##### 삼항 연산자를 이용한 경우

  ```jsx
  import React, { Component, Fragment } from 'react';
  
  class App extends Component {
    render() {
      return (
        <Fragment>
          {
            1 + 1 === 2
              ? (<div>맞아요!</div>)
              : (<div>틀려요!</div>)
          }
        </Fragment>
      )
    }
  }
  
  export default App;
  ```

  

  - AND 연산자를 이용해서 구현할 수도 있지만 AND 는 TRUE 일때만 보여주고

    FALSE 일때는 보여주지 않는다.

- 대부분의 경우엔 삼항연산자로 가능하지만 만약 복잡한 if 문이 필요할 경우

  JSX 밖에서 사용해주는 것이 좋다

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    const value = 1;
    return (
      <div>
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
    );
  }
}

export default App;
```





