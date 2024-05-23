import './Footer.css'
import Social1 from '../../assets/social-1.svg'
import Social2 from '../../assets/social-2.svg'
import Social3 from '../../assets/social-3.svg'
import Social4 from '../../assets/social-4.svg'
import Social5 from '../../assets/social-5.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation('main'); 

  return (
    <div className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__left">
                    <div className="footer__title">
                        {t('virtual_3d_labs')}
                    </div>
                    <div className="footer__socials">
                        <div className="footer__socials-title">
                            {t('follow_us')}
                        </div>
                        <div className="footer__socials-items">
                            <div className="footer__socials-item">
                                <img src={Social1} alt="" />
                            </div>
                            <div className="footer__socials-item">
                                <img src={Social2} alt="" />
                            </div>
                            <div className="footer__socials-item">
                                <img src={Social3} alt="" />
                            </div>
                            <div className="footer__socials-item">
                                <img src={Social4} alt="" />
                            </div>
                            <div className="footer__socials-item">
                                <img src={Social5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__right">
                    <div className="footer__columns">
                        <div className="footer__column">
                            <div className="footer__column-title">
                                {t('resources')}
                            </div>
                            <div className="footer__column-text">
                                <Link to='/'>{t('resources')}</Link>
                            </div>
                            <div className="footer__column-text">
                                <Link to='/lessons'>{t('video_lessons')}</Link>
                            </div>
                            <div className="footer__column-text">
                                <Link to='/theory'>{t('theory')}</Link>
                            </div>
                            <div className="footer__column-text">
                                <Link to='/formulas'>{t('formulas')}</Link>
                            </div>
                        </div>
                        <div className="footer__column">
                            <div className="footer__column-title">
                                {t('support')}
                            </div>
                            <div className="footer__column-text">
                                <Link to='/about'>{t('help_center')}</Link>
                            </div>
                            <div className="footer__column-text">
                                <Link to='/about'>{t('contacts')}</Link>
                            </div>
                        </div>
                        <div className="footer__column">
                            <div className="footer__column-title">
                                {t('company')}
                            </div>
                            <div className="footer__column-text">
                                <Link to='/about'>{t('about_us')}</Link>
                            </div>
                            <div className="footer__column-text">
                                <Link to='/about'>{t('who_we_are')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
  )
}

export default Footer