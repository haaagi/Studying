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