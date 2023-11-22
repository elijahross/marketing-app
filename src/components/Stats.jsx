import React from 'react'
import { stats, stats_de } from '../constants'
import styles from '../styles'
import { useTranslation } from 'react-i18next'

const Stats = () => {
    const {i18n} = useTranslation();
    let card = [];
    if (i18n.resolvedLanguage === 'en') {
        card = stats
    } else {
        card = stats_de
    };
    return(
<section className={`flex justify-center w-full slide-left flex-row flex-wrap sm:mb-12 mb-6 mt-6`}>
    {card.map((stat) => (
        <div key={stat.id} className={`flex-1 flex items-center flex-row m-3`}>
            <h4 className="text-left font-poppins font-semibold xs:text-[36px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient upperscale ml-3">{stat.title}</p>
        </div>
    ))}

</section>
)
}

export default Stats