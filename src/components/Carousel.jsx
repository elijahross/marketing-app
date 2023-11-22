import React from 'react'
import styles from '../styles'
import ScrollCarousel from 'scroll-carousel-react'
import { useTranslation } from 'react-i18next'


const Carousel = () => {
    const{ t }=useTranslation();
    return(
    <section className={`relative flex-col`}>
        <div className={`${styles.flexStart} relative w-full`}>
            <div className="flex absolute z-[10] w-[100vw] h-full frame-blur"> </div>
                <div className="flex flex-wrap sm:justify-center justify-start w-[100vw] feedback-container relative">
                    <ScrollCarousel
                    autoplay
                    speed={0.001}
                    className="z-[0]">
                        <div className="flex justify-start flex-col px-8 pt-10 w-[520px] h-[240px] mr-5 bg-transparent">
                            <h2 className="font-raleway font-semibold text-white text-[34px] ">
                                {t('produkt1.name')}
                            </h2>
                            <p className="font-raleway font-normal text-[14px] text-dimWhite pb-4">
                                {t('produkt1.text')}
                            </p>
                        </div>
                        <div className="flex justify-start flex-col px-8 pt-10 w-[520px] h-[240px] mr-5 bg-transparent">
                            <h2 className="font-raleway font-semibold text-white text-[34px] ">
                                {t('produkt2.name')}
                            </h2>
                            <p className="font-raleway font-normal text-[14px] text-dimWhite pb-4">
                                {t('produkt2.text')}
                            </p>
                        </div>
                        <div className="flex justify-start flex-col px-8 pt-10 w-[520px] h-[240px] mr-5 bg-transparent">
                            <h2 className="font-raleway font-semibold text-white text-[34px] ">
                                {t('produkt3.name')}
                            </h2>
                            <p className="font-raleway font-normal text-[14px] text-dimWhite pb-4">
                                {t('produkt3.text')}
                            </p>
                        </div>
                        <div className="flex justify-start flex-col px-8 pt-10 w-[520px] h-[240px] mr-5 bg-transparent">
                            <h2 className="font-raleway font-semibold text-white text-[34px] ">
                                {t('produkt4.name')}
                            </h2>
                            <p className="font-raleway font-normal text-[14px] text-dimWhite pb-4">
                                {t('produkt4.text')}
                            </p>
                        </div>
                        <div className="flex justify-start flex-col px-8 pt-10 w-[520px] h-[240px] mr-5 bg-transparent">
                            <h2 className="font-raleway font-semibold text-white text-[34px] ">
                                {t('produkt5.name')}
                            </h2>
                            <p className="font-raleway font-normal text-[14px] text-dimWhite pb-4">
                                {t('produkt5.text')}
                            </p>
                        </div>
                    </ScrollCarousel>

                </div>
        </div>
    </section>
)}

export default Carousel