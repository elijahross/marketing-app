import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '../styles';
import { int } from '../assets';
import { useInView } from 'react-intersection-observer';
import { layout } from '../styles';

const Step4 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
      });
    const { t } = useTranslation()


  return (
<div ref={ref} className={`${ inView ? "slide-left" : "hide"}`}>
    <div className={`${styles.flexCenter} ${styles.padding} ${layout.sectionImg} ${styles.marginY} flex md:flex-row flex-col-reverse`}>
        <div className={`max-w-[720px]  ${styles.paddingX} flex flex-col`}>
          <h2 className={`sm:text-[36px] text-[28px] text-white`}>{t('how.step4')}</h2>
          <p className={`${styles.paragraph}`}>{t('how.text4')}</p>
        </div>
        <div className='min-w-[260px] md:mb-0 mb-10'>
          <img src={int} alt="integration" className='max-w-[260px]' />
        </div>
      </div>
</div>
  )
}

export default Step4