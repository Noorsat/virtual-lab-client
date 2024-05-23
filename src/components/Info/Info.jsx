import './Info.css'
import Info1 from '../../assets/info-1.svg'
import Info2 from '../../assets/info-2.svg'
import Info3 from '../../assets/info-3.svg'
import Info4 from '../../assets/info-4.svg'
import Info5 from '../../assets/info-5.svg'
import Info6 from '../../assets/info-6.svg'
import { useTranslation } from 'react-i18next';

const Info = () => {
    const { t } = useTranslation('main'); 

  return (
    <div className="info">
        <div className="container">
            <div className="info__title">
                {t("what's_in_the_virtual_lab_physics_for_me?")}
            </div>
            <div className="info__items">
                <div className="info__item">
                    <div className="info__item-img">
                        <img src={Info1} alt="info-1" />
                    </div>
                    <div className="info__item-text">
                        {t('comportable_time')}
                    </div>
                </div>
                <div className="info__item">
                    <div className="info__item-img">
                        <img src={Info2} alt="info-2" />
                    </div>
                    <div className="info__item-text">
                        {t('study')}
                    </div>
                </div>
                <div className="info__item">
                    <div className="info__item-img">
                        <img src={Info3} alt="info-3" />
                    </div>
                    <div className="info__item-text">
                        {t('notes')}
                    </div>
                </div>
                <div className="info__item">
                    <div className="info__item-img">
                        <img src={Info4} alt="info-4" />
                    </div>
                    <div className="info__item-text">
                        {t('knowledge_and_logic')}
                    </div>
                </div>
                <div className="info__item">
                    <div className="info__item-img">
                        <img src={Info5} alt="info-5" />
                    </div>
                    <div className="info__item-text">
                    {t('progress')}
                    </div>
                </div>
                <div className="info__item">
                    <div className="info__item-img">
                        <img src={Info6} alt="info-6" />
                    </div>
                    <div className="info__item-text">
                    {t('comfortable_platform')}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info