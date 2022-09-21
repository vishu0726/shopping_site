import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userSignUp } from '../../redux/actions/actions'
// import { userLoggedIn } from '../redux/actions/actions'

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
            <h2 className='signup-header'>SignUp</h2>
            <label htmlFor="username">UserName</label>
            <input className='signin-input' id='username' type="text" onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}/>
            <br/>
            <br/>
            <label htmlFor="password">Password</label>
            <input className='signin-input' id='password' type="password" onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}/>
            <br/><br/>
            <button className='signingup-button'>Sign Up</button>
        </form>
    </>
  )
}
