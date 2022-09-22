import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userSignUp } from '../../redux/actions/actions'
// import { userLoggedIn } from '../redux/actions/actions'
import './signup.css'

export const SignUp = () => {
    // const userState = useSelector((state) => state.userSignUp.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const userList = JSON.parse(localStorage.getItem('user'));
        userList.push(userInfo);
        localStorage.setItem('user',JSON.stringify(userList));
        dispatch(userSignUp(userInfo));
        navigate('/login');
    }
  return (
    <>
        
        <form className='login-page' onSubmit={handleSubmit}>
            <br/>
            <label htmlFor="username"><h3>USERNAME</h3></label>
            <input className='signup-input' id='username' type="text" onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}/>
            <br/>
            <br/>
            <label htmlFor="password"><h3>PASSWORD</h3></label>
            <input className='signup-input' id='password' type="password" onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}/>
            <br/><br/>
            <button className='signingup-button'>Sign Up</button>
        </form>
    </>
  )
}
