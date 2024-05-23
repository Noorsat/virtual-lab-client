import './Books.css'
import Books1 from '../../assets/books-1.png';
import Books2 from '../../assets/books-2.png';
import Books3 from '../../assets/books-3.png';
import Books4 from '../../assets/books-4.png';
import Books5 from '../../assets/books-5.png';
import Books6 from '../../assets/books-6.png';
import { useTranslation } from 'react-i18next';

const Books = () => {
    const { t } = useTranslation('main'); 

    const onButtonClick = (doc) => {
        const pdfPath = `pdf/${doc}.pdf`;
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = `${doc}.pdf`;
        link.click();
    };

  return (
    <div className='books'>
        <div className="container">
            <div className="books__title">
                {t('e-books')}
            </div>
            <div className="books__items">
                <div className="books__item">
                    <div className="books__item-img">
                        <img src={Books1} alt="books-1" />
                    </div>
                    <div className="books__item-title">
                        {t('grade_7_by_basharuly_r._language')}
                    </div>
                    <div className="books__item-download" onClick={() => onButtonClick('7')}>
                        {t('download')}
                    </div>
                </div>
                <div className="books__item">
                    <div className="books__item-img">
                        <img src={Books2} alt="books-2" />
                    </div>
                    <div className="books__item-title">
                        {t('grade_8_by_krongart_b._language')}
                    </div>
                    <div className="books__item-download" onClick={() => onButtonClick('8')}>
                        {t('download')}
                    </div>
                </div>
                <div className="books__item">
                    <div className="books__item-img">
                        <img src={Books3} alt="books-3" />
                    </div>
                    <div className="books__item-title">
                        {t('grade_8_by_karabatyrov_a._language')}
                    </div>
                    <div className="books__item-download" onClick={() => onButtonClick('9')}>
                    {t('download')}
                    </div>
                </div>
                <div className="books__item">
                    <div className="books__item-img">
                        <img src={Books4} alt="books-4" />
                    </div>
                    <div className="books__item-title">
                        {t('grade_9_by_tashev_n._language')}
                    </div>
                    <div className="books__item-download" onClick={() => onButtonClick('9-2')}>
                    {t('download')}
                    </div>
                </div>
                <div className="books__item">
                    <div className="books__item-img">
                        <img src={Books5} alt="books-5" />
                    </div>
                    <div className="books__item-title">
                        {t('grade_10_by_krongart_b._language')}
                    </div>
                    <div className="books__item-download" onClick={() => onButtonClick('10')}>
                    {t('download')}
                    </div>
                </div>
                <div className="books__item">
                    <div className="books__item-img">
                        <img src={Books6} alt="books-6" />
                    </div>
                    <div className="books__item-title">
                        {t('grade_10_by_tom_tierney_language')}
                    </div>
                    <div className="books__item-download" onClick={() => onButtonClick('11')}>
                    {t('download')}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Books