import './Formulas.css'
import AccordionComponent from '../../components/Accordion/Accordion'
import ExtraFooter from '../../components/ExtraFooter/ExtraFooter'
import Footer from '../../components/Footer/Footer'
import { useTranslation } from 'react-i18next';

const Formulas = () => {
  const { t } = useTranslation('');
  
  return (
    <>
        <div className='lessons formulas'>
              <div className="theory__title">
              </div>
              <div className="lessons__input">
                  <input type="text" placeholder={t('lessons:search')} />
              </div>
        </div>  
        <AccordionComponent page={'formulas'} /> 
        <Footer /> 
    </>
  )
}

export default Formulas