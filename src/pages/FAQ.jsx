import React from 'react'
import styles from '../styles'
import { useTranslation } from 'react-i18next'
import { Accordion, AccordionItem as Item} from '@szhsin/react-accordion'
import { close } from "../assets";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`rotate-45 ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-90"
          }`}
          src={close}
          alt="close"
        />
      </>
    )}
    className={`border-[1px] border-dimWhite hover:border-[#61EFFF] rounded-[20px] mb-8`}
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-6 text-left text-[20px] ${
          isEnter && "border-[#61EFFF]"
        }`
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out"
    }}
    panelProps={{ className: "p-4" }}
  />
);




const FAQ = () => {
const {t} = useTranslation()

  return (
    <div>
      <div className='w-full mt-20'>
          <div className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
              <h2 className='text-center text-white font-raleway sm:text-[72px] text-[52px]'>
                  FAQs
              </h2>
              <p className={styles.paragraph}>
              {t('faq.text1')}
              </p>
          </div>
      </div>

      <div className={`${styles.flexStart} ${styles.padding} flex`}>
        <div className={`${styles.boxWidth} ${styles.marginX} text-white`}>
          <Accordion transition transitionTimeout={250} className={`${styles.marginX}`}>
            <AccordionItem header={t('faq.faq1')} className={``}>
              <p className={`${styles.paragraph}`}>{t('faq.res1')}</p>
            </AccordionItem>
            <AccordionItem header={t('faq.faq2')} className={``}>
              <p className={`${styles.paragraph}`}>{t('faq.res2')}</p>
            </AccordionItem>
            <AccordionItem header={t('faq.faq3')} className={``}>
              <p className={`${styles.paragraph}`}>{t('faq.res3')}</p>
            </AccordionItem>
            <AccordionItem header={t('faq.faq4')} className={``}>
              <p className={`${styles.paragraph}`}>{t('faq.res4')}</p>
            </AccordionItem>
            <AccordionItem header={t('faq.faq5')} className={``}>
              <p className={`${styles.paragraph}`}>{t('faq.res5')}</p>
            </AccordionItem>
            <AccordionItem header={t('faq.faq6')} className={``}>
              <p className={`${styles.paragraph}`}>{t('faq.res6')}</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FAQ