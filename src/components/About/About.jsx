import './About.css'
import CheckmarkIcon from '../../assets/check.svg'
import AboutImage from '../../assets/about.png'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('main'); 

  return (
    <div className='about'>
        <div className="container">
            <div className="about__title">
                {t('about_laboratory_work')}
            </div>
            <div className="about__wrapper">
                <div className="about__items">
                    <div className="about__item">
                        <div className="about__item-icon">
                            <img src={CheckmarkIcon} alt="checkmark" />
                        </div>
                        <div className="about__item-text">
                            {t('interactive_experiments:_students_can_manipulate_lab_equipment_and_conduct_experiments_just_as_they_would_in_a_physical_laboratory,_allowing_for_a_deeper_understanding_of_scientific_concepts.')}
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="about__item-icon">
                            <img src={CheckmarkIcon} alt="checkmark" />
                        </div>
                        <div className="about__item-text">
                            {t('realistic_simulations:_our_3d_environments_accurately_replicate_real_lab_settings,_providing_students_with_a_lifelike_experience_that_enhances_their_learning.')}
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="about__item-icon">
                            <img src={CheckmarkIcon} alt="checkmark" />
                        </div>
                        <div className="about__item-text">
                            {t('safety_and_accessibility:_virtual_experiments_eliminate_the_risks_associated_with_traditional_lab_work_while_making_the_learning_experience_accessible_to_students_anywhere,_at_any_time.')}
                        </div>
                    </div>
                </div>
                <div className="about__image" style={{bottom: 0}}> 
                    <img src={AboutImage} alt="about" width={400} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About