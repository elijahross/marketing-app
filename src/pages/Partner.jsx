import React from 'react'
import styles from '../styles'
import { beard, aaimo } from '../assets'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Partner = () => {
  const { t } = useTranslation();

  return (
  <div className={`${styles.flexCenter} ${styles.padding} flex-col`}>
    <div className={`sm:flex-row flex-col ${styles.marginY} flex`}>
      <div className={`${styles.boxWidth}`}>
        <p className='text-center text-white font-poppins sm:text-[72px] text-[52px]'>
                  {t('partner.title')}
        </p>
      </div>
    </div>
    <div className={`${styles.flexCenter} ${styles.marginX}`}>
      <div className={`${styles.boxWidth} flex flex-col`}>
        <div className={`py-8 mb-8 flex sm:flex-row flex-col`}>
          <div className="md:mr-20 mr-0 mb-6 self-center sm:w-[360px]">
            <Link to="https://www.aaimo.ch/" target="_blank" className='cursor-pointer'>
              <img src={aaimo} alt="aaimo" className="h-[120px] sm:ml-[120px]" />
            </Link>
          </div>
          <p className={`${styles.paragraph} ${styles.padding} flex-1 max-w-[720px]`}> {t('partner.text2')} </p>
        </div>
        <div className={`py-8 mb-8 flex sm:flex-row flex-col`}>
          <div className="md:mr-20 mr-0 mb-6 w-[360px] self-center">
            <Link to="https://beardsanalytics.com/" target="_blank" className='cursor-pointer'>
              <img src={beard} alt="beardanalytics" className="max-w-[360px]" />
            </Link>
          </div>
          <p className={`${styles.paragraph} ${styles.padding} flex-1 max-w-[720px]`}> {t('partner.text1')} </p>
        </div>
      </div>
    </div>
</div>
  )
}

export default Partner