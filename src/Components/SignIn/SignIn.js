import React, { Component } from 'react'
import '../LoginPage/LoginPage.css'
export default class SignIn extends Component {
    render() {
        return (
            <div>
                <input type="text" className="loginpage_text" placeholder="Phone number, username, or email" />
                <input type="password" className="loginpage_text" placeholder="Password" />
                <button className="login_button">Login</button>
            </div>
        )
    }
}
