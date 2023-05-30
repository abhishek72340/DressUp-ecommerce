import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <div>

            <span id='login-heading'>Forgot Password?</span>

            <form id='input-field'>

                <input type="email" placeholder='EMAIL' id='email-input' />
                <button className='dummy-data-button'>send mail</button>
            </form>

            <div id='login-privacy'>
                <span id='remember-me' onClick={() => navigate('/login')}>Login</span>
                <span id='forget-password'>privacy policy</span>
            </div>
            <div id='white-space'></div>
        </div>
    )
}
