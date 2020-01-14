import React, { Component } from 'react';

class SignUp extends Component {
    // static defaultProps = {
    //     info: {
    //         ID:'ASDF',
    //         PASSWORD:'1234',
    //         NICKNAME:'JOHN',
    //     }
    // }
    state = {
        ID:'',
        PASSWORD:'',
        NICKNAME:'',
        remember: false,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            ID:'',
            PASSWORD:'',
            NICKNAME:''
        });
    }
    handleCheck = (e) => {
        this.setState({ remember: e.target.checked });
    }

    render() {
        // const {
        //     ID, PASSWORD, NICKNAME
        // } = this.props.info;

        return(
            <form onSubmit={this.handleSubmit}>
                아이디<input 
                    placeholder="아이디"
                    value={this.state.ID}
                    onChange={this.handleChange}
                    name="ID"
                />
                <br/>
                비밀번호<input 
                    placeholder="비밀번호"
                    value={this.state.PASSWORD}
                    onChange={this.handleChange}
                    name="PASSWORD"
                />
                <br/>
                닉네임<input 
                    placeholder="닉네임"
                    value={this.state.NICKNAME}
                    onChange={this.handleChange}
                    name="NICKNAME"
                />
                <br/>
                
                <input 
                type="checkbox" 
                checked={this.state.remember}  
                onChange={this.handleCheck}
                />비숑
                <input 
                type="checkbox" 
                checked={this.state.remember}  
                onChange={this.handleCheck}
                />스피츠
                <br/>
                <button type="submit">제출하기</button>
            </form>
        )
    }
}

export default SignUp;