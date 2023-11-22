import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '../styles';
import { scope } from '../assets';
import { layout } from '../styles';

const Step1 = () => {
    const { t } = useTranslation()


  return (
<div className={`slide-left`}>
    <div className={`${styles.padding} ${layout.sectionImgReverse} ${styles.flexCenter} slide-bottom items-center mt-20 flex md:flex-row flex-col`}>
        <div className='min-w-[260px] md:mb-0 mb-10'>
          <img src={scope} alt="scope" className='max-w-[260px]' />
        </div>
        <div className={`max-w-[720px] ${styles.paddingX} flex flex-col`}>
          <h2 className={`sm:text-[36px] text-[28px] text-white`}>{t('how.step1')}</h2>
          <p className={`${styles.paragraph}`}>{t('how.text1')}</p>
        </div>
    </div>
</div>
  )
}

export default Step1