import { close} from "../assets";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "./Language";
import { useState, useEffect } from "react";
import styles from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [top, setTop] = useState(true);
  let prevScroll = window.scrollY;
  const { t } = useTranslation();
  useEffect(() => {
    const handelScroll = () => {
      const currentScroll = (window.scrollY);
      if (prevScroll < 100 || prevScroll >= currentScroll) {
        setTop(true);
      } else {
        setTop(false);
      } prevScroll = currentScroll;
    };
    window.addEventListener('scroll', handelScroll);
    return () => {
      window.removeEventListener('scroll', handelScroll);
    }
  }, [prevScroll]);
  return (
    <nav className={` ${!top ? "nhide" : "nshow" } ${styles.paddingX} w-full flex py-2 justify-between fixed items-center pointer-events-none z-[90]`}>
      <img src="" alt="ml-canvas" className="sm:w-[250px] w-[150px] self-end"/>
      <div className="flex-row flex justify-end items-center ">
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-dimWhite text-[16px] pointer-events-auto">
          <li className={`mr-10 font-poppins font-normal cursor-pointer`}> <NavLink to='/about' className={({ isActive, isPending }) => isPending ? "text-dimWhite" : isActive ? "text-white" : ""}>{t('navigation.service')}</NavLink> </li>
          <li className={`mr-10 font-poppins font-normal cursor-pointer`}> <NavLink to='/services' className={({ isActive, isPending }) => isPending ? "text-dimWhite" : isActive ? "text-white" : ""}>{t('navigation.prices')}</NavLink> </li>
          <li className={`mr-10 font-poppins font-normal cursor-pointer`}> <NavLink to='/blog' className={({ isActive, isPending }) => isPending ? "text-dimWhite" : isActive ? "text-white" : ""}>{t('navigation.blog')}</NavLink> </li>
          <li className={`mr-10 font-poppins font-normal cursor-pointer`}> <NavLink to='contact' className={({ isActive, isPending }) => isPending ? "text-dimWhite" : isActive ? "text-white" : ""}>{t('navigation.contact')}</NavLink> </li>
        </ul>
        <Language style={`sm:mt-0 mt-[2px] sm:ml-0 xs:ml-5 ml-0 pointer-events-auto`} />
      </div>
      <div className="sm:hidden flex flex-col justify-end items-center xs:mr-10 mr-2 pointer-events-auto">
        <img
          src={close}
          alt="menu"
          className={`${ toggle ? "transition transform: rotate-180 duration-500" : "transition transform: rotate-45 duration-500"} w-[20px] h-[20px] object-contain cursor-pointer`}
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${!toggle ? "hidden" : ""} z-50 fixed p-6 bg-black-gradient-2 top-20 right-0 min-w-[140px] mr-6 rounded-xl sidebar pointer-events-none`}>
          <ul className="mx-2 flex justify-end items-start flex-col font-raleway font-bold text-[18px] pointer-events-none">
            <li className={`my-2 cursor-pointer pointer-events-auto`}> <NavLink to='/about' className={({ isActive, isPending }) => isPending ? "text-dimWhite" : isActive ? "text-white" : "text-dimWhite"} onClick={() => setToggle((prev) => !prev)}>{t('navigation.service')}</NavLink> </li>
            <li className={`my-2 cursor-pointer pointer-events-auto`}> <NavLink to='/services' className={({ isActive, isPending }) => isPending ? "text-dimWhite" : isActive ? "text-white" : "text-dimWhite"} onClick={() => setToggle((prev) => !prev)}>{t('navigation.prices')}</NavLink> </li>
            <li className={`my-2 cursor-pointer pointer-events-auto`}> <NavLink to='/blog' className={({ isActive, isPending }) => isPending ? "text-dimWhite" : isActive ? "text-white" : "text-dimWhite"} onClick={() => setToggle((prev) => !prev)}>{t('navigation.blog')}</NavLink> </li>
            <li className={`my-2 cursor-pointer pointer-events-auto`}> <NavLink to='contact' className={({ isActive, isPending }) => isPending ? "text-dimWhite" : isActive ? "text-white" : "text-dimWhite"} onClick={() => setToggle((prev) => !prev)}>{t('navigation.contact')}</NavLink> </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;