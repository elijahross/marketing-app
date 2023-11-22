import React from 'react'
import CookieConsent from 'react-cookie-consent'
import styles from '../styles'
import { useTranslation } from 'react-i18next'

const Cookies = () => {
const {t} = useTranslation();
  return(
    <div className=''>
        <CookieConsent 
          disableStyles={true}
          location="bottom"
          enableDeclineButton
          flipButtons={true}
          buttonText={t('cookies.yes')}
          declineButtonText={t('cookies.no')}
          buttonWrapperClasses={`${styles.paddingY} sm:mt-10 sm:ml-10 ml-0 flex flex-col`}
          buttonClasses={`flex justify-center font-poppins rounded-[20px] bg-white w-[148px] h-[48px] items-center mb-2`}
          declineButtonClasses={`flex justify-center mb-2 font-poppins rounded-[20px] px-5 bg-transparent h-[48px] w-[148px] items-center border-2 border-dimWhite text-dimWhite`}
          containerClasses={`${styles.paddingX} ${styles.cookieBanner} fixed mb-5 `}
          contentClasses={`${styles.paddingY} flex justify-center text-dimWhite`}
          overlayClasses=""> 
            {t('cookies.text')}
          </CookieConsent>
    </div>
)}

export default Cookies