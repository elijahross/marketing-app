import React from 'react'
import styles from '../styles'
import Terms_de from '../components/Terms_de'
import Terms_en from '../components/Terms_en'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'


const Terms = () => {
 const { i18n } = useTranslation();
 let data2= ""
if (i18n.resolvedLanguage === 'en') {
  data2 = <Terms_en/>
} else {
  data2 = <Terms_de/>
};


  return (
<div>    
  <div className='w-full border-b-[1px] border-b-[##61EFFF]'>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
              <h2 className='text-center text-white font-raleway sm:text-[72px] text-[52px]'>
                  Terms & Conditions
              </h2>
          </div>
      </div>
  </div>
{data2}
</div>
  )
}

export default Terms