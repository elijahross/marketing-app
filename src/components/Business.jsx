import React from 'react'
import { features, features_de } from '../constants'
import styles, {layout} from '../styles'
import Button2 from './Button2'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'


const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`w-full flex flex-row p-6 rounded-[20px] ${index !== features.length -1} ? "mb-6" : "mb-9"} bg-transparent glowing-border`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
)

const Business = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
      });
    
    const { t, i18n } = useTranslation();
    
    let fcard = [];
    if (i18n.resolvedLanguage === 'en') {
        fcard = features
    } else {
        fcard = features_de
    };

  return (
    <section ref={ref} id="features" className={`${layout.section} my-20`}>
        <div className={`${layout.sectionInfo} ${inView ? "show" : "hide"}  max-w[470px]`}>
            <h2 className={`${styles.heading2} mb-2`}>
            {t('business.title1')}
            <br/>
            {t('business.title2')}
            </h2>
            <p className={`${styles.paragraph} max-w-[470px]mt-5 `}>
            {t('business.text')}
            </p>
            <Button2 styles="font-raleway glowing-btn mt-10 sm:block hidden" input={t('button.start')} nav="/contact"></Button2>
        </div>
        <div className={`delay ${layout.sectionImg} ${inView ? "show slide-left" : "hide"} flex-col`}>
            {fcard.map((feature, index) => (
                <FeatureCard key={feature.id} {... feature} index={index} />
            ))}
        </div>

    </section>
  )
}

export default Business