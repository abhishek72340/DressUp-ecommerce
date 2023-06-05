import React,{useState} from 'react'
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import {useToast} from '../../context/toast-context';
import LoginService from '../../services/LoginService';
import { Module } from '../../../src/module/Module';
export const Login = () => {
const navigate = useNavigate();
const [userDetails,setUserDetails] = useState({
    email:'',
    password:''
  })
  const {notifySuccess,notifyError} =useToast();
    const dummyUser = {
    email: "abhisingh.72340@gmail.com",
    password: "abhishek",
  };
  const applyDummyData=(e)=>{
    e.preventDefault();
    setUserDetails(dummyUser)
  }
  const LoginDataHandler=(e)=>{
    let name = e.target.name
    let val=e.target.value
    setUserDetails({...userDetails,[name]:val})
  }
  const submitData=async(e)=>{
    e.preventDefault();
    try {
      const res = await LoginService(userDetails)
      localStorage.setItem('token',JSON.stringify(res.data.encodedToken))
      localStorage.setItem('foundUser',JSON.stringify(res.data.foundUser))
       navigate('/');
      notifySuccess('login successfully')
    } catch (error) {
      notifyError('User Not Found')
    }    
    window.scrollTo({top:0,scroll:'instant'})
  };
    return (
        <div>
            <span id='login-heading'>Login</span>
            <form id='input-field' onSubmit={submitData}>
                <input type="email" name='email' value={userDetails.email} onChange={LoginDataHandler} placeholder='EMAIL' id='email-input' />
                <input type="password" name='password'  value={userDetails.password} onChange={LoginDataHandler}  placeholder='PASSWORD' id='password-input' />
                <button className='dummy-data-button'  onClick={applyDummyData}>Click To Apply Dummy Data</button>
                <button type='submit' className='dummy-data-button' >Login</button>
            </form>

            <div id='forget-remember-password'>
                <span id='remember-me'><input type="checkbox" />Remember Me</span>
                <span id='forget-password' onClick={() => navigate('/forgotpassword')}>Forget Your Password</span>
            </div>
            <Module />
        </div>
    )
}
