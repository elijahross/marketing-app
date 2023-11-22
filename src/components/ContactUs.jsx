import React, { useRef, useState } from 'react';
import styles from '../styles';
import { layout } from '../styles';
import { useTranslation } from 'react-i18next';


export const ContactUs = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  }

  return (
    <div className="relative w-full">
     <p className={`absolute ${!toggle ? "hide" : "inView, typewriter"} font-semibold sm:text-[20px] text-[16px] fornt-raleway text-white`}>{t('contact.response')}</p>
    <form className={`${layout.form} ${!toggle ? "" : "outViewForm" } w-full`} ref={form} onSubmit={handleSubmit} >
      <textarea name="message" placeholder={t('contact.form')} autoFocus={true} className={styles.textArea} />
      <input type="email" pattern="email" title="please check the spelling of your email" name="user_email" defaultValue="..@..." className={styles.input} />
      <button type="submit" className={`sm:self-start font-raleway self-center text-[20px] py-2 px-6 glowing-btn rounded-[10px]`}>{t('contact.button')}</button>
    </form>
    </div>
  );
};
