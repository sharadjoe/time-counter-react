import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Validator from 'validator'

import './LoginForm.css'

class LoginForm extends React.Component{
    state={
        data:{
            email:'',
            passoword:''
        },
        loading: false,
        errors:{}
    }
    
    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name] : e.target.value }
        })

    onSubmit = () => {
        const errors = this.validate(this.state.data)
        this.setState({errors})
        if(Object.keys(errors).length===0){
            this.props.submit(this.state.data)
        }
         

    }

    validate= (data) => {
        const errors={}
        if(!Validator.isEmail(data.email)) errors.email="Invalid Email Format"
        if(!data.password(data.password)) errors.passowrd="Can't be blank"
        return errors

    }

    render(){
        const { data, errors } = this.state
        return(
        <div className="Modal">
            <Form onSubmit={ this.onSubmit }>
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="someone@something.com"
                        id="email"
                        value={data.email}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="type something strong"
                        id="password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Button basic>Submit</Button>
            </Form>
        </div>

        )
    }

}

export default LoginForm