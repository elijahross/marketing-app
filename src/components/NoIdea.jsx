import React from 'react'
import styles from '../styles'
import {robot_2} from "../assets"
import Button3 from './Button3'
import { useTranslation } from 'react-i18next'


const NoIdea = () => {
    const {t}= useTranslation();
    return(
<section id="hook" className={` flex md:flex-row flex-col ${styles.paddingX} sm:mt-8 mt-10`}>
    <div className={`${styles.boxWidth} z-[30]`}>
        <div className={`items-center md:pr-20 pr-0`}>
            <h2 className={`${styles.heading2} sm:text-left text-center`}> {t('noidea.title')} </h2>
            <p className={`${styles.paragraph} sm:text-left text-center mt-5`}> {t('noidea.text')}</p>
            <div className={`mt-10 flex md:justify-start justify-center`}> <Button3 styles="self-center font-raleway" input={t('noidea.button')}/></div>
        </div>
    </div>
    <div className={`${styles.flexCenter} relative md:mt-0 mt-20`}>
        <img src={robot_2} alt="robot" className={`align-end relative sm:min-w-[560px] w-[0px] z-[5]`} />
        <div className="absolute animate-spin z-[0] w-[70%] h-[40%] rounded-full top-5 right-10 pink__gradient" />
        <div className="absolute animate-spin z-[1] w-[60%] h-[80%] left-0 rounded-full bottom-40 white__gradient" />
        <div className="absolute animate-spin z-[2] w-[50%] h-[80%] right-0 bottom-20 blue__gradient" />
    </div>
    
</section>

)}

export default NoIdea