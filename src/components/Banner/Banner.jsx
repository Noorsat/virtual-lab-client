import './Banner.css'
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation(); 

  return (
    <div className='banner'>
        <div className="container">
            <div className="banner__title">
              { t('main:3d_virtual_physics_laboratory')}
            </div>
        </div>
    </div>
  )
}

export default Banner