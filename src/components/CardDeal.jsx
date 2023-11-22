import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../styles'
import Button2 from './Button2'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import Lines from './Lines'

const CardDeal = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
      });
    const { t } = useTranslation();

return(
    <section ref={ref} className={`${layout.sectionReverse} ${inView ? "slide-bottom" : "hide"} my-10`}>
        <div className={`${layout.sectionInfo} flex flex-1`}>
            <h2 className={styles.heading2}> {t('deal.title1')} <br />
            {t('deal.title2')}
            </h2>
            <p className={`${styles.paragraph} md:max-w-[560px] max-w-[480px] mt-5`}>
            {t('deal.text')}
            </p>
            <Button2 styles="ml-0 mt-10" input={t('button.learn')} nav="/steps"></Button2>
        </ div>
        <div className={`${layout.sectionImg} sm:my-0 my-10 flex flex-1 relative`}>
            <img src={card} alt="statistics" className="fixed md:max-w-[620px] sm:max-w-[540px] max-w-[360px] md:mr-24 sm:mr-32 mb-10" />
            <Lines className="fixed" />
        </div>

    </section>
)}

export default CardDeal