import React from 'react'

const FeedbackCard = ({content, name, title, img }) => {
    return(
    <div className={`flex flex-col px-12 py-10 rounded-[20px] max-w-[370px] sm:mr-5 mr-0`}>
        <p className="align-top h-[140px] font-poppins font-normal text-[18px] leading-[32px] text-white my-6">
            {content}
        </p>
        <div className="flex flex-row">
            <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-white text-[20px] leading-[28px]">{name}</h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[20px]">{title}</p>
            </div>
        </div>
    </div>
)
}
export default FeedbackCard