import styles from '../styles'
import { diy } from '../assets'
import { layout } from '../styles'
import PostCard from '../components/PostCard'
import { Await, useRouteLoaderData } from 'react-router-dom'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'



const Blog =() => {
const posts = useRouteLoaderData("blog");
const data = posts.data.echoesConnection.edges
const { t } = useTranslation();

  return (
    <div className="sm:mt-36 mt-0 slide-bottom bg-transparent">
      <section id="blog" className={`${styles.flexStart} w-full md:flex-row flex-col ${styles.paddingX}`}>
        <div className="flex self-center md:mr-20 mr-0 md:mb-0 mb-10">
          <img src={diy} className="relative md:max-w-[720px] z-30"></img>
          <div className="absolute sm:w-[800px] w-[75%] sm:h-[400px] h-[15%] rounded-full sm:left-[30px] left-10 -top-0  white__gradient z-10" />
        </div>
        <div className={`md:max-w-[520px] sm:max-w-[480px] max-w-[450px] self-center sm:px-0 px-2 flex flex-col`}>
          <h2 className={`${styles.heading2}  md:text-left sm:text-center text-left py-4 `}>{t('blog.title')} </h2>
          <p className={`${styles.paragraph} md:text-left sm:text-center text-left `}>{t('blog.text')}</p>
        </div>
      </section>
      <div className={`slide-bottom mt-12 mb-12 ${styles.paddingX} ${styles.flexCenter}`}>
        <Suspense fallback={<p>Loading package...</p>} >
          <Await resolve={posts} errorElement={<div>Could not load Postcards 😬</div>}>
            <div className={`flex md:justify-start justify-between md:flex-row flex-col`}>
                {data.map((post) => <PostCard key={post.node.id} post={post} />)}
            </div> 
          </Await>
        </Suspense>
        </div>
      </div>
  );
}

export default Blog

