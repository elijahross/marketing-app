import React from 'react'
import { amazon, bill, google } from '../assets'
import styles, {layout} from '../styles'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const Billing = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
      });
    const { t } = useTranslation();
      
return(
    <section ref={ref} id="product" className={`${layout.section} my-20`}>
        <div className={`${layout.sectionImgReverse}`}>
            <img src={bill} alt="billing" ref={ref} className={`${inView ? "slide-right" : "hide"} w-[100%] relative z-10`} />
            <div className="absolute z-0 -left-[500px] -top-20 w-[80%] h-[60%] rounded-full pink__gradient" />
            
        </div>
        <div className={`${layout.sectionInfo} ${inView ? "show" : "hide"}`}>
            <h2 className={styles.heading2}> {t('billing.head1')} <br className="sm:block hidden" /> {t('billing.head2')}</h2>
            <p className={`${styles.paragraph} max-w-[520px] mt-5`}>{t('billing.text')}</p>
            <div className="flex flex-row flex-wrap sm:mt-6 mt-0">
                <a href="https://advertising.amazon.com/" target="_blank"><img src={amazon} alt="amazon-ads" className="w-[128px] h-[43px] mr-7 object-contain rounded-[20px]" /></a>
                <a href="https://ads.google.com/"target="_blank" ><img src={google} alt="google-ads" className="w-[148px] h-[43px] object-contain rounded-[20px]" /></a>
            </div>
        </div>
    
    </section>

)
}

export default Billing