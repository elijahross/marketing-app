import React from 'react'
import styles from '../styles'
import { layout } from '../styles'
import { erro } from '../assets'


const Http404 = () => (
    <section id="http404" className={`${layout.sectionImgReverse} flex md:flex-row flex-col bg-primary w-full`}>
        <div className={`${styles.boxWidth} relative flex justify-center items-center`}>
            <img src={erro} className={`z-40 flex w-[640px]`}></img>
            <div className="absolute z-[2] w-[40%] h-[70%] left-20 top-10 rounded-full red__gradient opacity-20" />
            <div className="absolute animate-spin z-[2] w-[60%] h-[80%] right-20 -top-20 rounded-full yellow__gradient opacity-20" />
        </div>
        <div className={`md:flex-col flex-row sm:mx-10 mx-5 justify-center items-center`}>
            <h2 className={`w-[520px] md:text-left text-center font-poppins font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100px] leading-[75px]`}>
                Ups... Something went wrong!
            </h2>
            <p className={`max-w-[520px] text-dimWhite md:text-left text-center text-[20px] ${styles.marginY}`}>
                Don't panic. It's probably the matrix just messing around. Check the spelling in the url and try to reload the site compounds. Otherwise contact our support team. 
            </p>
        </div>
    </section>
)

export default Http404