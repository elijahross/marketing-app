import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'


const Hero = () => {
const {t} = useTranslation();
return(
    <section id="home" className={`flex md:flex-row flex-col-reverse`}>
        <div className={`flex-1 ${styles.flexStart} slide-right flex-col xl:px-0 sm:px-16 px-6 mb-0`}>
            <NavLink to="/services" className='sm:flex flex-row items-center py-[2px] px-4 bg-discount-gradient rounded-[10px] mb-8 hidden cursor-pointer'>
                <img src={discount} alt='discount' className='show w-[32px] h-[32px]' />
                <p className={`${styles.paragraph}`}>
                <span className="pl-2 text-white">20% </span>
                {t('hero.discount')}
                <span className="text-white"> Marketing Automation </span>
                 </p> 
            </NavLink>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-raleway font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[95px] leading-[75px]'>
                Marketing 
                <br className="sm:block hidden" />
                <span className="text-gradient">{t('hero.title1')}</span>{t('hero.title2')}
                </h1>
                <div className="sm:flex hidden md:mr-4 mr-0 slide-right">
                    <GetStarted></GetStarted>
                </div>
            </div>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}> {t('hero.text')}</p>
        </div>
        <div className="relative md:mt-2 mt-10">
            <img src={robot} alt="billing" className=" slide-right relative w-[100%] z-[10]" />
            <div className="absolute animate-spin z-[0] w-[70%] h-[40%] rounded-full top-5 right-12 pink__gradient" />
            <div className="absolute animate-spin z-[1] w-[60%] h-[80%] rounded-full bottom-40 white__gradient" />
            <div className="absolute animate-spin z-[2] w-[30%] h-[60%] right-20 bottom-20 blue__gradient" />
        </div>
    </section>
)
}

export default Hero