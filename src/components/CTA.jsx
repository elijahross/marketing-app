import React from 'react'
import styles from '../styles'
import Button from './Button'
import { useTranslation } from 'react-i18next'



const CTA = () => {
    const {t} =useTranslation();
    return(
    <section className={`${styles.padding} relative flex flex-col bg-transarent`}>
                <div className="absolute z-[0] w-[25%] h-[90%] -left-72 -top-48 rounded-full white__gradient opacity-[0.25]"></div>
        <div className="flex-1 flex flex-col items-center">
            <h2 className={`font-semibold text-center sm:text-[40px] text-[32px] text-white xs:leading-[76.8px] leading-[66.8px] font-poppins`}>
                {t('cta.title1')}
            </h2>
            <p className={`font-poppins text-center font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[560px] sm:mt-2 mt-3`}>
            {t('cta.text')}
            </p>
        </div>
        <div className={`${styles.flexCenter} align-center mt-14 mb-20`}> 
            <Button styles=" self-center glowing-btn-flk" />
        </div>
    </section>

)}
export default CTA