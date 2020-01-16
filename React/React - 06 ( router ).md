# React - router

### path

- 특정 위치에 도달하면 우리가 정한 component를 보여줘라

```jsx
import React from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/> // exact를 안써주면 home화면에있다가 about 화면 갈 경우 둘다 뜨게 된다. 따라서 exact를 써주면 각각 화면이 뜸 
        <Route path="/about" component={About}/>
      </div>
    </Router>
  );
};

export default App;
```

- `<Router></Router>`  이거 안에는 무조건 하나의 child 만 있어야 한다

  ex ) div 여러  개 쓰고 싶으면 

### header

- button 이 있어서 각 component로 이동시켜주는 역할을 하는 애 



##### header.css

```css
.header {
    background: #5c7cfa;
    display: table;
    table-layout: fixed;
    width: 100%;
}

.item {
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: table-cell;
    color: white;
    text-decoration: none;   /*이걸 해주는 이유는 나중에 link 를 쓸 때 a태그를 쓰는데 그 때 밑줄이 그어지는데 그걸 없애주기 위해서 */
    font-size: 1.1rem;

}

.item:hover {
    background: #748ffc;
}

.item:active {
    background: white;
    color: #5c7cfa;
    
}
```





### url parameter

- url에 para에 따른 다른 페이지로 보여주려면

  ` <Route path="/about/:username"/>` 이런 식으로 페이지 이름 뒤에 /: 을 붙여준다 





### Redirect

- 코드 상에서 다른 컴포넌트로 redirect 하고 싶은 경우

```jsx
import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <button onClick={() => {history.push('/posts')}}>
                // 위에처럼 history 를 이용하여 보낼 수 있다. 
                버어튼
            </button>
        </div>
    );
};

export default Home;
```





### Query Parameter

- `props` 중에서 `location` 을 사용한다

```jsx
import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            {new URLSearchParams(location.search).get('keyword')}검색창
        </div>
    );
};

export default Search;
```

`new URLSearchParams(location.search).get()` 이거는 내장 함수이다.

- para 가 keyword 임



### 404 page

- `switch` 를 쓴다. 

- ```jsx
  import React from 'react';
  import  {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
  
  import NoMatch from './routes/NoMatch';
  const App = () => {
    return (
      <Router>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about/:username" component={About}/>
              <Route path="/posts" component={Posts}/>
              <Route path="/login" component={Login}/>
              <Route path="/mypage" component={MyPage}/>
              <Route path="/search" component={Search}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  };
  
  export default App;
  ```

- 이거 구조가 router 는 path에서 걸리는 거부터 차례대로 보여주는거다

- 근데 switch를 써주면 아무것도 걸리는게 없다면 nomatch로 연결시켜준다. 