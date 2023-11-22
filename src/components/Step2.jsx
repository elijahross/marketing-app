import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '../styles';
import { cloud } from '../assets';
import { useInView } from 'react-intersection-observer';
import { layout } from '../styles';

const Step2 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
      });
    const { t } = useTranslation()


  return (
<div ref={ref} className={`${ inView ? "slide-left" : "hide"}`}>
    <div className={`${styles.flexCenter} ${styles.padding} ${layout.sectionImg} ${styles.marginY} flex md:flex-row flex-col-reverse`}>
        <div className={`${styles.paddingX} max-w-[720px] flex flex-col`}>
          <h2 className={`sm:text-[36px] text-[28px] text-white`}>{t('how.step2')}</h2>
          <p className={`${styles.paragraph}`}> {t('how.text2')}</p>
        </div>
        <div className='min-w-[260px] md:mb-0 mb-10'>
          <img src={cloud} alt="cloud" className='max-w-[260px]' />
        </div>
    </div>
</div>
  )
}

export default Step2