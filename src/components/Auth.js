import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className = 'helo'>
                <h1>Helo</h1>
                <input type='text' placeholder = 'Username' className=''/>
                <br/>
                <input type='text' placeholder = 'Password' className=''/>
                <br/>
                <a href = {process.env.REACT_APP_LOGIN}>
                    <button className=''>Login</button>
                </a>
                <Link to = '/dashboard'>
                        <button className=''>Dashboard</button>
                </Link>
            </div>
        )
    }
}