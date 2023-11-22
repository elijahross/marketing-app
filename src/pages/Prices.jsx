import React from 'react'
import Carousel from '../components/Carousel'
import NoIdea from '../components/NoIdea'
import styles, { layout } from '../styles'
import { modular1, modular2, modular3, modular4, modularb, how } from '../assets'
import Cookies from '../components/Cookies'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import PriseCTA from '../components/PriseCTA'



const Prices = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
      });
    const { t } = useTranslation();

return(
    <div>
        <Cookies />
        <div className={`slide-bottom ${styles.flexCenter} flex-col mb-10`}>
            <div className={`sm:mt-0 mt-6 ${styles.boxWidth}`}>
                <section className={`${styles.flexCenter} ${styles.marginX} flex md:flex-row flex-col sm:mt-20 mt-0`}>
                    <div className="relative sm:mr-10 mr-0 md:max-w-[480px] sm:min-h-[480px] min-h-[360px] sm:min-w-[480px] min-w-[360px]">
                        <img src={modularb} className={`absolute -top-0 opacity-[0.5] right-0 z-20`} />
                        <img src={modular1} className={`absolute -top-0 modular1 right-0 z-20`} />
                        <img src={modular2} className={`absolute -top-0 modular2 right-0 z-30`} />
                        <img src={modular3} className={`absolute -top-0 modular4 right-0 z-40`} />
                        <img src={modular4} className={`absolute -top-0 modular3 right-0 z-50`} />
                    </div>
                    <div className="sm:mt-10 mt-0 sm:ml-10 ml-0 mb-20 ">
                        <h2 className={`${styles.heading2} sm:text-left text-center`}> {t('modular.title1')} <span className="text-gradient"> {t('modular.title2')} </span> </h2>
                        <p className={`${styles.paragraph} max-w-[480px] sm:text-left text-center`}> {t('modular.text')} </p>
                    </div>
                </section>
            </div >
                <Carousel />
        </div>
        <div className={`${layout.sectionImg} ${styles.paddingX} justufy-between flex flex-row`}>
            <div className={`flex flex-row `} >
                <img src={how} className='w-[150px] h-[520px] z-10 mb-20' />
            </div>
            <div ref={ref} className={` ${styles.paddingX} relative w-full`}>
                <div className='flex flex-row h-[120px]'>
                    <p className={`${ inView ? "show" : "hide"} pt-3 font-poppins font-semi-bold text-[20px] md:leading-[36px] leading-[24px] flex flex-row z-20  text-white left-0`}>{t('price_work.text1')}</p>
                </div>
                <div className='flex flex-row h-[120px]'>
                    <p className={` ${ inView ? "show1" : "hide"} py-3 text-right font-poppins font-semi-bold text-[20px] md:leading-[36px] leading-[24px] z-20 w-full text-white`}>{t('price_work.text2')}</p>
                </div>
               <div className='flex get-started flex-row h-[120px]'>
                 <p className={` ${ inView ? "show2" : "hide"} py-3 font-poppins font-semi-bold text-[20px] md:leading-[36px] leading-[24px]  flex flex-row z-20  text-white`}>{t('price_work.text3')}</p>
               </div>
               <div className='flex flex-row h-[120px]'>
                 <p className={` ${ inView ? "show3" : "hide"} pt-3 font-poppins text-right font-semi-bold text-[20px] w-full md:leading-[36px] leading-[24px] z-20 text-white`}>{t('price_work.text4')}</p>
                </div>  
                <div className="absolute sm:w-[250px] w-[200px] sm:h-[250px] h-[200px] rounded-full sm:-right-48 -right-20 sm:-top-36 -top-20 pink__gradient z-10" />  
            </div> 
        </ div>
        <PriseCTA/>
        <div className={`bg-primary flex-col flex ${styles.padding}`}>
                <NoIdea />
        </div>
    </div>

)}

export default Prices