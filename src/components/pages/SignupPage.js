import React from 'react'

import SignupForm from '../forms/SignupForm'

class SignupPage extends React.Component{
    render(){
        return(
            <div>
                <h1 id="heading">SignUp Page</h1>
                <SignupForm onSubmit={ this.onSubmit }/>
            </div>

        )
    }
}


export default SignupPage