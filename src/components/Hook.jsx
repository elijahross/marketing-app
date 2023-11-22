import React from 'react'
import { tensorflow, hook, pipedrive, aws } from '../assets'
import styles, {layout} from '../styles'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Billing = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
      });
    const { t } = useTranslation();
    return(
    <section ref={ref} id="product" className={`${layout.section} relative my-20`}>
        <div className={`${layout.sectionImgReverse} ${inView ? "slide-bottom" : "hide"}`}>
            <img src={hook} alt="map" className="w-[100%] z-[5]" />
        </div>
        <div className="absolute animate-spin z-[0] w-[50%] h-[80%] -right-[600px] -top-48 rounded-full blue__gradient opacity-50"></div>
        <div className={`${layout.sectionInfo} ${inView ? "slide-bottom" : "hide"}`}>
            <h2 className={styles.heading2}>{t('hook.title1')} <br className="sm:block hidden" />
            {t('hook.title2')}
            </h2>
            <p className={`${styles.paragraph} max-w-[520px] mt-5`}>
            {t('hook.text')}
            <Link to="/steps" className={`${styles.paragraph} cursor-pointer hover:text-white`}> {t('hook.text2')} </Link>
            </p>
            <div className="flex flex-row flex-wrap align-top sm:mt-8 mt-6">
                <img src={pipedrive} alt="pipedrive-logo" className="w-[128px]  mr-7 object-contain cursor-pointer" />
                <img src={aws} alt="aws-cloud" className="h-[28px] mr-7 object-contain cursor-pointer sm:flex hidden" />
                <img src={tensorflow} alt="tensorflow-logo" className="w-[148px] object-contain cursor-pointer" />  
            </div>
        </div>
    
    </section>

)}

export default Billing