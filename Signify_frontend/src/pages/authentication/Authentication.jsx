import './Authentication.scss';
import React from 'react'
import { Images } from '../../constants'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const userInitialValues = {
    email: "",
    password: "",
  }
  

function Authentication() {

    const navigate = useNavigate();

    const [visibilityIcon, visibilityIconTrigger] = useState(false)
    const [passwordType, passwordTypeTrigger] = useState('password');  //'text' & 'password'
    const [page, pageTrigger] = useState('register'); // 'login' & 'register'
    const [userType, userTypeTrigger] = useState('');  // 'normal'  & 'special'
    const [userDetails, userDetailsTrigger] = useState(userInitialValues);

    const iconTrigger = () => {
        if(visibilityIcon==true) {
            visibilityIconTrigger(false);
            passwordTypeTrigger('password');
        }
        else {
            visibilityIconTrigger(true)
            passwordTypeTrigger('text');
        }
    }

    const loginRegisterTrigger = ()=> {
        if(page == 'register') {
            pageTrigger('login');
            userTypeTrigger('');
            userDetailsTrigger(userInitialValues);
        }
        else {
            pageTrigger('register')
            userTypeTrigger('');
            userDetailsTrigger(userInitialValues);
        }
    }

    const onInputChange = (e) => {
        userDetailsTrigger({...userDetails, [e.target.name] : e.target.value})
    }

    const signUpUser = async () => {
        
        try {
            console.log(userDetails, userType);
            if(userDetails.email != '' && userDetails.password != '') {
                
                const response = await axios.post('http://localhost:8800/signup', {
                    email : userDetails.email,
                    password : userDetails.password,
                    userType : userType
                });
                const userId = response.data.message

                console.log('User Registered Successfully!!', userId);
                userTypeTrigger('');
                userDetailsTrigger(userInitialValues);
                pageTrigger("login");
            }
            else {}

        } catch(error) {
            console.error('User Registration Failed!!', error);
        }
        
    }

    const signInuser = async () => {

        try {

            if(userDetails.email != '' && userDetails.password != '') {
                
                const response = await axios.post('http://localhost:8800/login', {
                    email : userDetails.email,
                    password : userDetails.password
                });

                const userId = response.data.message

                console.log('User Logged In Successfully!!', userId);
                userTypeTrigger('');
                userDetailsTrigger(userInitialValues);
                navigate("/");
                navigate(0);
            }
            else {}

        } catch(error) {
            console.error('User Login Failed!!', error);
        }

    }

  return (
    <div className='mainContainer'>
      <div className='boxWrapper'>
        <div className="subWrapper subWrapper1">
            <img src={Images.advertisingGirl} alt="advertising girl" />
        </div>
        <div className="subWrapper subWrapper2">
            <div className="wrapper">
                <div className="icon">
                    <CloseIcon className='closeIcon'/>
                </div>
                <div className="imgLogo">
                    <img src={Images.logo} alt="logo" />
                </div>
                <div className="heading">
                    <h3>Welcome to Signify :</h3> <h3>Bridging Worlds with Every Gesture</h3>
                    {
                        page == 'register' ?
                            <p>Already signed up? <span onClick={loginRegisterTrigger}>Login</span></p>
                        :
                            <p>Don't have account? <span onClick={loginRegisterTrigger}>Sign up</span></p>    
                    }
                </div>
                <div className="body">
                    {
                        page == 'register' &&
                            <div className="categoryField">
                                <div className="label1">
                                    <label>
                                        <input type="radio" name='category' value='normal' onChange={()=>userTypeTrigger('normal')}/> &nbsp; Normal User
                                    </label>
                                </div>
                                <div className="label2">
                                    <label>
                                        <input type="radio" name='category' value='special' onChange={()=> userTypeTrigger('special')}/> &nbsp; Special User
                                    </label>
                                </div>
                            </div>
                    }
                    <div className={`emailField ${page == 'login' && 'pageTrigger'}`}>
                        <input type="text" name="email" value={userDetails.email} placeholder='Your email address' onChange={onInputChange}/>
                    </div>
                    <div className="passwordField">
                        <input type={passwordType} name="password" value={userDetails.password} placeholder="Create a password" onChange={onInputChange} />
                        {
                            visibilityIcon ? 
                                <VisibilityIcon className='visibilityIcon' onClick={iconTrigger}/> 
                            : 
                                <VisibilityOffIcon className='visibilityIcon' onClick={iconTrigger}/>
                        }
                    </div>
                    
                    {
                        page == 'login' && 
                            <div className="userAgreement">
                                <div className="label3">
                                    <label>
                                        <input type="checkbox" name='userAgreement' value='rememberMe' /> &nbsp; Remember Me
                                    </label>
                                </div>
                            </div>
                    }

                    <div className="signUpBtn">
                        <LockOutlinedIcon className='lockOutIcon'/>
                        {
                            page == 'register' ?
                                <button onClick={signUpUser}>Sign Up</button>
                            :
                                <button onClick={signInuser}>Sign In</button>
                        }
                    </div>
                    <div className="otherSignupOptions">
                        <p className='endStmt'>Or, continue with <span>Google</span> or <span>Facebook</span></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication
