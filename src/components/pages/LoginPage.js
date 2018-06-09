import React from 'react'

import LoginForm from '../forms/LoginForm'
import './LoginPage.css'

class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <h1 id="heading">Login Page</h1>
                <LoginForm onSubmit={ this.onSubmit }/>
            </div>

        )
    }
}


export default LoginPage