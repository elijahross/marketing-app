const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-semibold font-poppins md:text-[52px] sm:text[48px] text-[36px] text-white md:leading-[85px] sm:leading-[75.8px] leading-[48px] w-full",
    paragraph: "font-normal font-poppins text-dimWhite text-[18px] leading-[36px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    input: "outline-none caret-color-[#61EFFF] font-semibold bg-transparent shadow-xl w-full  h-[64px] max-w-[720px] px-[10px] mb-10 sm:text-[52px] text-[20px] text-white",
    textArea: "outline-none font-semibold bg-transparent caret-color-[#61EFFF] max-w-[720px] w-full max-h-[240px] px-[10px] mb-20 sm:text-[52px] text-[20px] text-white",
    cookieBanner: "flex sm:flex-row flex-col shadow-xl rounded-[20px] max-w-[720px] min-h-[240px] items-center z-50 bg-blend-darken bg-black-gradient-2  mx-10 left-0",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    
    form: `${styles.flexStart} flex flex-col w-full rounded-[20px]`

  };

  export default styles;