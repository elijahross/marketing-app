import React from 'react'
import { ContactUs } from '../components/ContactUs'
import styles from '../styles'
import { layout } from '../styles'
import { message } from '../assets'
import Cookies from '../components/Cookies'
import { useTranslation } from 'react-i18next'


const Contact = () => {
    const { t } = useTranslation();

  return (
    <section id="contact" className="">
        <Cookies />
        <div className={`${layout.sectionImgReverse} justify-center items-center sm:flex-row flex-col relative`}>
        <div className="absolute animate-spin w-[30%] h-[50%] rounded-full -left-10 -top-0 white__gradient opacity-10 z-0" />
            <div className={`${styles.flexStart} ${styles.boxWidth}`}>
                <img src={message} className="self-center slide-bottom max-w-[320px] mb-10 ml-0"></img>
            </div>
            <div className={`slide-left sm:text-left sm:min-w-[720px] min-w-[360px] text-center`}>
                <h2 className={`${styles.heading2} z-10`}>
                    {t('contact.title')}
                </h2>
                    <div className="justify-start mt-10">
                        <ContactUs></ContactUs>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Contact