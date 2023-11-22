import React from 'react'
import styles from '../styles'
import { useTranslation } from 'react-i18next'
import { Subscription } from '../components/Subscription'
import { news } from '../assets'
import { loader } from '../assets'

const Newsletter = () => {
  const { t } = useTranslation()

  return (
<div className='w-full'>
    <div className={`${styles.flexCenter} ${styles.paddingX} mb-20`}>
        <div className={`${styles.boxWidth}`}>
          <div className='text-center mt-10 relative w-full flex flex-row align-end items-center justify-center'>
            <h2 className='text-center self-end text-white font-poppins sm:text-[72px] text-[36px]'>
                    Stay in the
            </h2>
            <span className='text-center ml-[12px] text-[#61efff] font-raleway sm:text-[72px] text-[42px]'>
              L
            </span>
            <img src={loader} className='sm:w-[90px] w-[48px] absolute sm:ml-[390px] ml-[202px] sm:mt-[16px] mt-[9px] self-center bg-blue' />
            <span className='text-center sm:ml-[100px] ml-[52px] text-[#61efff] font-raleway sm:text-[72px] text-[42px]'>
              p
            </span>
          </div>
          <div className='flex slide-bottom sm:flex-row flex-col '>
            <div className='flex flex-col w-full'>
              <img src={news} className='w-full self-center p-10 bg-blue' />
            </div>
            <div className='flex flex-col sm:my-10 my-0 max-w-[640px] px-10 self-center'>
              <h2 className='text-left text-white font-poppins sm:text-[36px] text-[28px]'>
                    {t('news.title')}
              </h2>
                <p className={`${styles.paragraph} my-4`}>
                  {t('news.text')}
                </p>
                <Subscription/>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Newsletter