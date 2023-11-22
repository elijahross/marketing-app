import React from 'react'
import { feedback, feedback_de } from '../constants'
import styles from '../styles'
import FeedbackCard from './FeedbackCard'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'


const Testimonials = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
      });
    const {t, i18n} = useTranslation();
    let cards = [];
    if (i18n.resolvedLanguage === 'en') {
        cards = feedback
    } else {
        cards = feedback_de
    };

      return(
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} my-20 flex flex-col`}>
        <div ref={ref} className={`w-full justify-center flex items-center md:flex-row flex-col ${inView ? "slide-bottom" : "hide"}`}>
            <span className={`${styles.heading2} flex-1 min-w-[580px] px-10 text-center`}>{t('testimonials.title1')} </span>
            <div className="flex">
                <p className={`font-raleway font-normal text-white text-[18px] text-center w-full md:py-8 py-4 md:pr-24 pr-0 md:pl-2 pl-0 sm:px-0 px-6`}>{t('testimonials.title2')}</p>
            </div>
        </div>
        <div className={`${inView ? "slide-left2" : "hide"} border-b-[1px] border-b-[#61EFFF] w-full bg-transparent mb-6`}></div>
        <div ref={ref} className={` ${inView ? "slide-bottom" : "hide"} flex flex-wrap justify-center w-full relative z-[1]`}>
            {cards.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>

)
}

export default Testimonials