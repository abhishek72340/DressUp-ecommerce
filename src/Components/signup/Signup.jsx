import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/toast-context';
import SignupService from '../../services/SignupService';
import { Module } from '../../module/Module';

export const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { notifyError, notifySuccess } = useToast();

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
        navigate('/');
        notifySuccess('Signup Sucessfully')
      } catch (error) {
        alert(error)
      }
    } else {
      notifyError('Password Did Not Match')
    }
  }

  return (
    <div>

      <span id='login-heading'>Signup</span>

      <form id='input-field' onSubmit={addNewUser}>
        <input type="text" name='name' onChange={handelInput} value={userData.name} placeholder='NAME' id='password-input' />
        <input type="email" name='email' onChange={handelInput} value={userData.email} placeholder='EMAIL' id='email-input' />
        <input type="password" name='password' onChange={handelInput} value={userData.password} placeholder='PASSWORD' id='password-input' />
        <input type="password" name='confirmPassword' onChange={handelInput} value={userData.confirmPassword} placeholder='CONFIRM PASSWORD' id='password-input' />
        <button type='submit' className='dummy-data-button'  >signup</button>
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
