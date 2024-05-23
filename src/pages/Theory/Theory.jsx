import { useTranslation } from 'react-i18next'
import AccordionComponent from '../../components/Accordion/Accordion'
import ExtraFooter from '../../components/ExtraFooter/ExtraFooter'
import Footer from '../../components/Footer/Footer'
import './Theory.css'

const Theory = () => {
  const { t } = useTranslation('theory');

  return (
    <>
        <div className='lessons theory'>
            <div className="theory__title">
                { t('physics_is_one_of_the_main_school_subjects._physics_studies_and_describes_the_processes_taking_place_in_the_world_around_us_and_therefore_it_is_very_interesting._physics_is_also_very_important_after_admission_to_the_university,_the_skills_acquired_while_studying_physics_are_widely_used_in_a_huge_class_of_university_disciplines_in_many_specialties,_from_engineering_and_scientific_to_architectural_and_it_specialties.') }
            </div>
            <div className="lessons__input">
                <input type="text" />
            </div>
        </div>  
        <AccordionComponent page={'theory'}/> 
        <Footer />
    </>
  )
}

export default Theory