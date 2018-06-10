import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Validator from 'validator'

import './LoginForm.css' 
import InlineError from '../messages/InlineError'

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
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data)
        }
         

    }

    validate= (data) => {
        const errors={}
        if(!Validator.isEmail(data.email)) errors.email="Invalid Email Format"
        if(!data.password) errors.password="Can't be blank"
        return errors

    }

    render(){
        const { data, errors } = this.state
        return(
        <div className="Modal">
            <Form onSubmit={ this.onSubmit }>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="someone@something.com"
                        id="email"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} /> }
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="type something strong"
                        id="password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} /> }
                </Form.Field>
                <Button basic>Submit</Button>
            </Form>
        </div>

        )
    }

}

export default LoginForm