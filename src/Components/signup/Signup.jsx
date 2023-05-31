import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignupService from '../../services/SignupService';
import { Module } from '../../module/Module';

export const Signup = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  let name, value;
  const handelInput = (e) => {
    name = e.target.name
    value = e.target.value
    setUserData({ ...userData, [name]: value })
  }
  const addNewUser = async (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmPassword) {
      try {
        const response = await SignupService(userData)
        localStorage.setItem('token', response.data.encodedToken)
        navigate('/')
      } catch (error) {
        alert(error)
      }
    } else {
      alert('password dont match')
    }
  }

  return (
    <div>

      <span id='login-heading'>Signup</span>

      <form id='input-field'>
        <input type="text" name='name' onChange={handelInput} value={userData.name} placeholder='NAME' id='password-input' />
        <input type="email" name='email' onChange={handelInput} value={userData.email} placeholder='EMAIL' id='email-input' />
        <input type="password" name='password' onChange={handelInput} value={userData.password} placeholder='PASSWORD' id='password-input' />
        <input type="password" name='confirmPassword' onChange={handelInput} value={userData.confirmPassword} placeholder='CONFIRM PASSWORD' id='password-input' />
        <button className='dummy-data-button' onClick={addNewUser}>signup</button>
      </form>

      <div id='login-privacy'>
        <span id='remember-me' onClick={() => navigate('/login')}>Login</span>
        <span id='forget-password'>privacy policy</span>
      </div>
      <div id='white-space'></div>

      <Module />
    </div>
  )
}
