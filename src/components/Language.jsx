import React from 'react'
import i18n from '../services/i18';
import { useTranslation } from 'react-i18next';



const Language = ({style}) => {
    const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);}; 
    const { i18n } = useTranslation();


  return (
    <div className={`flex-row flex justify-end items-center ${style}`}>
            <ul className={`justify-end items-center flex list-none font-poppins font-normal text-[16px] aligh-center`}>
                <li className={`cursor-pointer ${i18n.resolvedLanguage === 'en' ? "text-white" : "text-dimWhite"}`} onClick={() => {changeLanguage('en')}}>EN</li>
                <span className="mx-1 text-dimWhite" >|</span>
                <li className={`cursor-pointer ${i18n.resolvedLanguage === 'de' ? "text-white" : "text-dimWhite"}`} onClick={() => {changeLanguage('de')}}>DE</li>
            </ul>
    </div>
  )
}

export default Language