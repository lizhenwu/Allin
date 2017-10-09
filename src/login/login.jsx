import React from 'react';
import './login.less';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
    login = () => {
        this.setState({isLogin: true})
    }
    render() {
        if(this.state.isLogin) {
            return <Redirect to="/home"/>
        }
        return(
            <section styleName='login'>
            <input/>
            <input/><br/>
            <button onClick={this.login}>log in</button><button>sign up</button>
            <button>访客</button>
            </section>
        ) 
    }
}

export default Login;