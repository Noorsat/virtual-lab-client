import './Videos.css'
import { useTranslation } from 'react-i18next';

const Videos = () => {
    const {t} = useTranslation('lessons');

  return (
    <div className='videos'>
        <div className="container">
            <div className="videos__title">
                {t('video_lessons')}:
            </div>
            <div className="videos__items">
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/n8BTw-8VJaQ?si=qYFB8fISa8hZI1FR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t('useful_activity_coefficient._practical_part._7th_grade.')}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                    <iframe width="500" height="250" src="https://www.youtube.com/embed/n8BTw-8VJaQ?si=D7_hSAJ3UQpNmKQh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                        {t('useful_activity_coefficient._practical_part._7th_grade.')}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/fXpxOnBsvBk?si=hrmDAXzOl0Im8Aje" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t('the_golden_rule_of_mechanics._practical_part._7th_grade.')}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/fXpxOnBsvBk?si=hrmDAXzOl0Im8Aje" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t('the_golden_rule_of_mechanics._practical_part._7th_grade.')}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/23K8z4hJoFQ?si=nxwmrrNIZB4PGUzC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t("reflection_of_light._practical_part._8th_grade.")}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/ua1Nekn_4BA?si=WJ7jijnJ2wxmcG6z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t("chemical_action_of_electric_current._faraday's_law._practical_part._8th_grade.")}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/Px9Tidqtrw4?si=EV82CCW3oQ8-qzou" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t('free_fall_of_bodies._acceleration_of_free_fall.')}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/OrENEUfn0Co?si=w0fdHL_VvIFiWig-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t('velocity_and_displacement_during_rectilinear_motion._department._9th_grade.')}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/Dy7yzColXro?si=Mdnx6Z5zVyL0wAux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t('rectilinear_equal-variable_motion._acceleration._practical_part._9th_grade.')}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/a94gy1TS8Sc?si=oZ930KeybPftJxHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t('motion_of_a_body_thrown_horizontally._10th_grade.')}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/gLCCvXC71oc?si=-xl6EwtLJSVWlJDj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t('radius_of_curvature._10th_grade.')}
                        </div>
                    </div>
                </div>
                <div className="videos__item">
                    <div className="videos__item-img">
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/RahyK-IYetU?si=JzBd68LFjYm4nkM6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="videos__item-content">
                        <div className="videos__item-name">
                            {t('free_fall._10th_grade.')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Videos