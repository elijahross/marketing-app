import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles';
import { layout } from '../styles';
import { useTranslation } from 'react-i18next';
import useAnalytics from './Analytics';


export const Subscription = () => {
  const gaEventTracker = useAnalytics('News')
  const form = useRef();
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    {sendEmail};
    setToggle((prev) => !prev);
    gaEventTracker('subscribe');}



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eu6c2u6', 'template_bzeyezi', form.current, 'BjJHm3PJE510g8QZx')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="relative w-full">
     <p className={`absolute ${!toggle ? "hide" : "inView, typewriter"} font-poppins text-dimWhite sm:text-[18px] text-[14px]`}>{t('news.response')}</p>
    <form className={`${layout.form} ${!toggle ? "" : "outViewForm" } w-full`} ref={form} onSubmit={handleSubmit} >
      <input type="email" pattern="email" title="please check the spelling of your email" name="user_email" placeholder="example@mail.com" className={`outline-none border-b-[1px] border-b-white bg-transparent h-[48px] max-w-[720px] px-[10px] my-10 sm:text-[26px] text-[20px] text-dimWhite`} />
      <button type="submit" className={`sm:self-start font-raleway sm:self-center text-[20px] py-2 px-6 glowing-btn rounded-[10px]`} onClick={() => {setToggle((prev) => !prev); console.log(toggle)}}>{t('button.sub')}</button>
    </form>
    </div>
  );
};
