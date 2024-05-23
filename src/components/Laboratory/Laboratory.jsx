import './Laboratory.css'
import Lab1 from '../../assets/lab-1.png';
import Lab2 from '../../assets/lab-2.png';
import Lab3 from '../../assets/lab-3.png';
import Lab4 from '../../assets/lab-4.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const Laboratory = () => {
    const { t } = useTranslation('main'); 

    const username = localStorage.getItem('username');

    const navigate = useNavigate();

    const onButtonClick = (doc) => {
        if (!username){
            navigate('/login');
        }else{
            const pdfPath = `pdf/${doc}.pdf`;
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = `${doc}.pdf`;
            link.click();
        }
    };

  return (
    <div className='laboratory'>
        <div className="container">
            <div className="laboratory__title">
                {t('physics_virtual_laboratory')}
            </div>
            <div className="laboratory__items">
                <div className="laboratory__item">
                    <div className="laboratory__item-img">
                        <img src={Lab1} alt="lab1" />
                    </div>
                    <div className="laboratory__item-title">
                        {t('dynamometer')}
                    </div>
                    <div className="laboratory__item-link" onClick={() => onButtonClick('lab-1')}>
                        Download
                    </div>
                </div>
                <div className="laboratory__item">
                    <div className="laboratory__item-img">
                        <img src={Lab2} alt="lab2" />
                    </div>
                    <div className="laboratory__item-title">
                        {t('speed')}
                    </div>
                    <div className="laboratory__item-link" onClick={() => onButtonClick('lab-2')}>
                        Download
                    </div>
                </div>
                <div className="laboratory__item">
                    <div className="laboratory__item-img">
                        <img src={Lab3} alt="lab-3" />
                    </div>
                    <div className="laboratory__item-title">
                     {t('inertia')}
                    </div>
                    <div className="laboratory__item-link" onClick={() => onButtonClick('lab-3')}>
                        Download
                    </div>
                </div>
                <div className="laboratory__item">
                    <div className="laboratory__item-img">
                        <img src={Lab4} alt="lab-4" />
                    </div>
                    <div className="laboratory__item-title">
                    {t('free_fall_of_the_body')}
                    </div>
                    <div className="laboratory__item-link" onClick={() => onButtonClick('lab-4')}>
                        Download
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Laboratory