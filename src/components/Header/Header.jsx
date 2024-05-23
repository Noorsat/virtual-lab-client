import './Header.css'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Popover } from 'antd';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation('main'); 

    const username = localStorage.getItem('username');

    const navigate = useNavigate();

    const content = (
        <div>
          <p className='header__language-choose' onClick={() => i18n.changeLanguage('kz')}>KZ</p>
          <p className='header__language-choose' onClick={() => i18n.changeLanguage('ru')}>RU</p>
          <p className='header__language-choose' onClick={() => i18n.changeLanguage('eng')}>ENG</p>
        </div>
      );

      const content2 = (
        <div onClick={() => {localStorage.removeItem('username'); navigate('/login')}}>
            {t('quit')}
        </div>
      )

  return (
    <div className='header'>
        <div className="container">
            <div className='header__wrapper'>
                <div className="header__nav">
                    <div className="header__title">
                        <Link to='/'>{t('virtual_labs')}</Link>
                    </div>
                    <div className="header__text">
                        <Link to='/lessons'>{t('video_lessons')}</Link>
                    </div>
                    <div className="header__text">
                        <Link to='/theory'>{t('theory')}</Link>
                    </div>
                    <div className="header__text">
                        <Link to='/formulas'>{t('formulas')}</Link>
                    </div>
                    <div className="header__text">
                        <Link to='/about'>{t('about_us')}</Link>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: "center", gap: 24}}>
                    <div className="header__button">
                        {
                            username ? 
                                <Popover trigger='click' content={content2}>
                                    {username}
                                </Popover>
                            :
                            <Link to='/login'>{t('log_in')}</Link>
                        }
                    </div>
                    <div className='header__language'>
                    <Popover content={content} trigger="click">
                        { i18n.language.toUpperCase() }
                    </Popover>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header