import React from 'react'
import { useTranslation } from 'react-i18next'
import Button2 from './Button2';
import styles from '../styles';
import { cta_prices, cta1, cta2, cta3, cta4 } from '../assets';
import { useInView } from 'react-intersection-observer';

const PriseCTA = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
      });
    const { t } = useTranslation()


  return (
<div ref={ref} className={`${ inView ? "slide-bottom" : "hide"} ${styles.flexCenter} ${styles.padding} mb-20`}>
            <div className={`md:my-10 my-0 ${styles.boxWidth} ${styles.marginX} flex md:flex-row flex-col`}>
                <div className={`relative self-center`}>
                <div className="absolute sm:w-[400px] w-[400px] sm:h-[250px] h-[200px] rounded-full sm:-left-96 -left-20 sm:-top-20 -top-20 blue__gradient z-0" />  
                    <img src={cta_prices} className='md:w-[1024px] w-[420px] md:pr-10 z-10 pr-0'/>
                    <img src={cta1} className='cta1 absolute md:w-[1024px] w-[420px] z-20 top-0'/>
                    <img src={cta2} className='cta2 absolute md:w-[1024px] w-[420px] z-20 top-0 pr-20'/>
                    <img src={cta3} className='cta3 absolute md:w-[1024px] w-[420px] z-20 top-0'/>
                    <img src={cta4} className='cta4 absolute md:w-[1024px] w-[420px] z-20 top-0'/>
                </div>
                <div className={`items-center sm:text-left text-center flex flex-col md:my-10 my-0 md:ml-10 ml-0 z-[40]`}>
                    <h2 className={`${styles.heading2} mb-2`}>
                        {t('cta.title2')}
                    </h2>
                    <p className={`${styles.paragraph} mb-10`}>
                    {t('cta.text2')}
                    </p>
                    <Button2 styles="md:self-start self-center" input={t('button.connect')} nav="/contact"/>
                </div>
            </div>
        </div>
  )
}

export default PriseCTA