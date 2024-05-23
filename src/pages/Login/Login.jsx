import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';
import { notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const { t } = useTranslation('login');

    const navigate = useNavigate();

    const loginHandler = () => {
        axios.post('https://virtual-labs-back.onrender.com/api/auth/signin', loginData).then((res) => {
            localStorage.setItem("username", res.data.username)
            navigate('/')
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
                {t("don't_have_an_account?")} <Link to='/signup'>{t('register')}</Link>  
            </div>
            <div className="signup__form">
                <div className="signup__form-title">
                    {t('log_in')}
                </div>
                <div className="signup__form-input">
                    <div className="signup__form-input-label">
                        {t('email')}
                    </div>
                    <div className="signup__form-input-input">
                        <input type="text"  value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} />
                    </div>
                </div>
                <div className="signup__form-input">
                    <div className="signup__form-input-label">
                        {t('password')}
                    </div>
                    <div className="signup__form-input-input">
                        <input type="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})}  />
                    </div>
                </div>
                <div className="signup__form-button" onClick={loginHandler}>
                    {t('login')}
                </div>
            </div>
        </div>
        <Footer />   
        </>
  )
}

export default Login