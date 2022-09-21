import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLoggedIn, userSignUp } from '../../redux/actions/actions';

export const Login = () => {
    const userState = useSelector((state) => state.user);
    const userSignupState = useSelector((state) => state.userSignUp.users);
    console.log(userState,'1');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userNotFount, setUserNotFount] = useState(false);
    const [passwordDoesNotMatch, setPasswordDoesNotMatch] = useState(false);

    const [userInfo, setUserInfo] = useState({
        username:'',
        password: ''
    })

    const submitHandler = (e) => {
        e.preventDefault();
        const userList = JSON.parse(localStorage.getItem('user'));
        const userFromStorage = userList.find((user) => {
            return user.username === userInfo.username;
            
        });
        if (userFromStorage) {
            if (userFromStorage.password === userInfo.password){
                dispatch(userLoggedIn(userInfo));
                navigate('/');
                
            }
            else {
                setPasswordDoesNotMatch(true);
            }
            } else {
                console.log('navigate to sign up');
                setUserNotFount(true);
        }
    }
  return (
    <>
    <form className='login-page' onSubmit={submitHandler}>
        <label htmlFor='username'><h3>Username</h3> </label>
        <input className='signin-input' type="text" id='username' onChange={(e) => setUserInfo({...userInfo, username:e.target.value})}/>
        <label htmlFor='password'><h3>Password</h3></label>
        <input className='signin-input' type="password" id='password'onChange={(e) => setUserInfo({...userInfo, password:e.target.value})}/>
        <button className='login-button'>Sign In</button>
    </form>
    {userNotFount && (<div className='signup-warning'><h3>You are not an existing user, please sign up first</h3>
    <button className='signup-button' onClick={() => navigate('/signup')}>Sign Up</button></div>)}
    {passwordDoesNotMatch && <h3>Your password is incorrect, please use correct password</h3>}
    {/* {passwordDoesNotMatch ? <h3>Your password is incorrect, please use correct password</h3> : setUserNotFount(false)}; */}
    </>
  )
}
