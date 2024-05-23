import { Link } from 'react-router-dom'
import './Signup.css'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react';
import axios from 'axios';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

const Signup = () => {
   const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: ''
   });
   
   const { t } = useTranslation('register');

   const registerHandler = () => {
    axios.post('https://virtual-labs-back.onrender.com/api/auth/signup', registerData).then((res) => {
        notification["success"]({
            message: res.data.message
        })
    }).catch((res) => {
        notification["error"]({
            message: res.response.data.message
        })
    })
   }

  return (
    <>
        <div className="container">
            <div className='signup__title'>
                {t('already_have_an_account?')} <Link to='/login'>{t('log_in')}</Link>  
            </div>
            <div className="signup__form">
                <div className="signup__form-title">
                    {t('create_an_account')}
                </div>
                <div className="signup__form-input">
                    <div className="signup__form-input-label">
                        {t('email')}
                    </div>
                    <div className="signup__form-input-input">
                        <input type="text" value={registerData.email} onChange={(e) => {setRegisterData({...registerData, email: e.target.value })}} />
                    </div>
                </div>
                <div className="signup__form-input">
                    <div className="signup__form-input-label">
                        {t('username')}
                    </div>
                    <div className="signup__form-input-input">
                        <input type="text" value={registerData.username} onChange={(e) => setRegisterData({...registerData, username: e.target.value})} />
                    </div>
                </div>
                <div className="signup__form-input">
                    <div className="signup__form-input-label">
                        {t('password')}
                    </div>
                    <div className="signup__form-input-input">
                        <input type="password" value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})}/>
                    </div>
                </div>
                <div className="signup__form-button" onClick={registerHandler}>
                    {t('sign_up')}
                </div>
            </div>
        </div>
        <Footer />    
    </>
  )
}

export default Signup