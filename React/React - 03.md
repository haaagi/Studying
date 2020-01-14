# React - 03

```jsx
import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone:'',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // 왼쪽이 key 오른쪽이 value
            // name 자리에 아래 form 태그에 name 값이 들어간다
        })
    }
    render() {
        return(
            <form>
                <input 
                    placehloder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input 
                    placehloder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <div>{this.state.name}  {this.state.phone}</div>
            </form>
        );
    }
}


export default PhoneForm;
```





## props

```jsx
// app.js
import React, {Component} from 'react';

import PhoneForm from './components/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render(){
    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}  // onCreate 는 변수같은거다 
        />
      </div>
    );
  }
}

export default App;
```



```jsx
//phone form.js

import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone:'',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        //페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달한다. 
        this.props.onCreate(this.state);
        // 상태를 초기화시켜준다
        this.setState({
            name:'',
            phone:''
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    placehloder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input 
                    placehloder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">제출</button>
            </form>
        );
    }
}


export default PhoneForm;
```

