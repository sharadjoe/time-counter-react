import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Header, Form } from 'semantic-ui-react'
import './HomePage.css';

const HomePage = () => (
    <div class="ui container" id="first">
        <Header
            as="h1" 
            textAlign="center" className="para">
            <Link to="/login">Login</Link> Or <Link to="/signup">SignUp</Link>
         </Header>
         
        <p><h2><q>Yea!!!Not much Artistic</q></h2></p>
    </div>

)

export default HomePage