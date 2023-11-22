import React from 'react'
import styles from '../styles'
import { footerLinks, footerLinks_de, socialMedia } from '../constants'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Footer = () => {
const {t, i18n}= useTranslation();
let card = [];
if (i18n.resolvedLanguage === 'en') {
    card = footerLinks
} else {
    card = footerLinks_de
};
    return(
    <section className={`${styles.flexCenter} py-4 flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className=" w-full flex justify-between flex-wrap md:mt-0 mt-10">
            <div className="sm:self-end self-center">
                <img src="" alt="ml-canvas" className="sm:w-[180px] w-[125px] object-contain" />
            </div>
                {card.map((footerLink) =>(
                    <div key={footerLink.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
                        <ul className="mt-2 ">
                            {footerLink.links.map ((link,index) =>(
                                <li key={link.id} className="font-poppins font-normal text-[16px] text-dimWhite mt-1 hover:text-secondary cursor-pointer">
                                    <NavLink to={link.link}>{link.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>    
                ))}
            </div>
        </div>
        <div className="w-full flex justify-between md:flex-row flex-col items-center pt-4 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[12px] text-dimWhite">
                Elijah Ross 2023 All rights reserved
            </p>
            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) =>(
                    <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`} />
                ))}
            </div>
        </div>
    </section>

)}

export default Footer