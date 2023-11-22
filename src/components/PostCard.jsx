import React from 'react'
import styles from '../styles';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PostCard = ({post}) => {
  const { i18n } = useTranslation();
  let data = "";
  if (i18n.resolvedLanguage === 'en') {
    data = post.node
  } else {
    data= post.node.localizations[0]
  };

  return (
    <div className={`sm:px-10 px-6 sm:py-8 py-4 bg-transparent mb-8 max-w-[480px] min-w-[360px]`}>
      <div className="relative overflow-hidden z-0 shadow-md pb-64 mb-6">
        <img src={post.node.facade.url} alt={post.node.title} className=" object-top object-cover absolute h-64 w-full rounded-[10px]" />
      </div>
        <div>
          <div className='border-b-[1px] border-b-White'>
            <Link to={post.node.linkId}  className={`${styles.heading2} text-center lign-center font-poppins cursor-pointer`}>{data.title}</Link>
          </div>
          <div className={`${styles.paragraph} font-poppins mt-6 mb-6`}>{data.description}</div>
          <Link to={post.node.linkId} className="glowing-border w-full text-center self-bottom py-2 text-dimWhite text-[20px] mb-2 cursor-pointer"> Read more... </Link>
        </div>
    </div>
  )
}

export default PostCard