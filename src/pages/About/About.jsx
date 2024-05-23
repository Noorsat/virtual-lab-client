import './About.css'
import AboutBg from '../../assets/about-bg.png'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation('aboutus')

  return (
    <div className='about'>
        <div className="container">
            <div className="about__title about__title2">
                {t('about_us')}
            </div>
            <div className="about__text">
                {t('we_are_a_dedicated_team_of_educators_and_technologists_committed_to_providing_students_with_innovative_and_effective_virtual_learning_experiences._our_platform_combines_advanced_3d_echnologies_with_educational_resources_to_create_an_engaging_and_interactive_environment_for_students_to_explore_and_experiment_in_various_scientific_disciplines._we_strive_to_support_students_in_their_academic_journey_by_offering_high-quality_e-books_and_video_tutorials._Our_goal_is_tomake_learning_accessible,_safe,_and_enriching,_empowering_students_to_achieve_academic_success_and_develop_a_strong_foundation_in_the_sciences.')}
            </div>
            <div className="about__image">
                <img src={AboutBg} alt="about-bg" />
            </div>
            <div className="about__form">
                <div className="about__form-title">
                    {t('get_in_touch')}
                </div>
                <div className="about__form-text">
                    {t('we’d_love_to_hear_from_you._please_fill_out_this_form.')}
                </div>
                <div className="about__form-input">
                    <input type="text" placeholder={t('name')} />
                </div>
                <div className="about__form-input">
                    <input type="text" placeholder={t('email')}  />
                </div>
                <div className="about__form-input">
                    <input type="text" placeholder={t('phone_number')} />
                </div>
                <div className="about__form-input">
                    <input type="text" placeholder={t('question')}  />
                </div>
                <div className="about__form-button">
                    {t('connect_with_us')}
                </div>
            </div>
        </div>
        <div className="about__footer">
            <div className="container">
                <div className="about__footer-columns">
                    <div className="about__footer-column">
                        <div className="about__footer-title">
                            {t('our_contact_details')}
                        </div>
                        <div className="about__footer-text">
                            Let’s connect.
                        </div>
                    </div>
                    <div className="about__footer-column">
                        <div className="about__footer-item">
                            <div className="about__footer-item-title">
                                Telephone
                            </div>
                            <div className="about__footer-item-text">
                                +7 (775) 571-13-72
                            </div>
                        </div>
                        <div className="about__footer-item">
                            <div className="about__footer-item-title">
                                WhatsApp
                            </div>
                            <div className="about__footer-item-text">
                                +7 (775) 571-13-72
                            </div>
                        </div>
                    </div>
                    <div className="about__footer-column">
                        <div className="about__footer-item">
                            <div className="about__footer-item-title">
                                Instagram
                            </div>
                            <div className="about__footer-item-text">
                                virtual_lab_3d.kz
                            </div>
                        </div>
                        <div className="about__footer-item">
                            <div className="about__footer-item-title">
                                Email
                            </div>
                            <div className="about__footer-item-text">
                                virtual.lab.3d.kz@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="extrafooter__c">
            Virtual Labs
        </div>
    </div>
  )
}

export default About