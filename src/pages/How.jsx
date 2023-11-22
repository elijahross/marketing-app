import React from 'react'
import styles from '../styles'
import { useTranslation } from 'react-i18next'
import PriseCTA from '../components/PriseCTA'
import Step1 from '../components/Step1'
import Step2 from '../components/Step2'
import Step3 from '../components/Step3'
import Step4 from '../components/Step4'
import Step5 from '../components/Step5'


const How = () => {

  const { t } = useTranslation();

  return (
  <div>
    <div className='w-full mt-20'>
        <div className={`${styles.flexStart} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth} flex flex-col slide-top`}>
                    <h1 className='text-center text-white font-raleway sm:text-[72px] text-[52px]'>
                    {t('how.title')} </h1>
            </div>
        </div>
    </div>
    <div className={`${styles.marginX} flex-col mt-20`}>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
    </div>
    <PriseCTA />
  </div>
  )
}

export default How