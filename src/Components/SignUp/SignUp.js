import React, { Component } from 'react'
import './SignUp.css'
export default class SignUp extends Component {
    render() {
        return (
            <div>
                <input type="text" className="loginpage_text" placeholder="Mobile nulber or Email" />
                <input type="text" className="loginpage_text" placeholder="Full name" />
                <input type="text" className="loginpage_text" placeholder="Username" />
                <input type="password" className="loginpage_text" placeholder="Password" />
                <button className="login_button">Sign Up</button>
            </div>
        )
    }
}
