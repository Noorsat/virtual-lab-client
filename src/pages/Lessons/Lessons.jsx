import Videos from '../../components/Videos/Videos'
import Footer from '../../components/Footer/Footer'
import './Lessons.css'
import { useTranslation } from 'react-i18next';

const Lessons = () => {
  const { t } = useTranslation('lessons');

  return (
    <>
        <div className='lessons'>
            <div className="lessons__input">
                <input type="text" placeholder={t('search')} />
            </div>
        </div>  
        <Videos/>
        <Footer />
    </>
  )
}

export default Lessons