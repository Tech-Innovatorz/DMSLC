import './Register.scss';
import React from 'react'
import { Images } from '../../constants'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Register() {
  return (
    <div className='mainContainer'>
      <div className='boxWrapper'>
        <div className="subWrapper subWrapper1">

        </div>
        <div className="subWrapper subWrapper2">
            <div className="wrapper">
                <div className="imgLogo">
                    <img src={Images.logo} alt="logo" />
                </div>
                <div className="heading">
                    <h3>Welcome to Signify: Bridging Worlds with Every Gesture</h3>
                    <p>Already signed up? <span>Login</span></p>
                </div>
                <div className="body">
                    <div className="subBody">
                        <label>
                            <input type="radio" name='category' value='personal' /> Personal
                        </label>
                        <label>
                            <input type="radio" name='category' value='organization' /> Organization
                        </label>
                    </div>
                    <div className="emailField">
                        <input type="text" name="email" placeholder='Your email address'/>
                    </div>
                    <div className="passwordField">
                        <input type="text" name="password" placeholder="Create a password" />
                    </div>
                    <div className="countryField">
                        <p>Country of residence</p>
                        <select name="residence" >
                            <option value="">Select an option</option>
                            <option value="UK">United Kingdom</option>
                            <option value="USA">United States</option>
                            <option value="IND">India</option>
                        </select>
                    </div>
                    <div className="signUpBtn">
                        <LockOutlinedIcon/>
                        <p>Sign up</p>
                    </div>
                </div>
                <p className='endStmt'>Or, continue with <span>Google</span> or <span>Facebook</span></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
