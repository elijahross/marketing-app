import React from 'react'
import styles from '../styles'
import { useParams } from 'react-router-dom';
import { useQuery, QueryClientProvider, QueryClient, useQueryClient } from '@tanstack/react-query';
import { endpoint } from '../services/index-en';
import {request, gql} from 'graphql-request';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import Newsletter from '../pages/Newsletter';


const queryClient = new QueryClient();

export default function Article () { 
const params = useParams();
const linkId = params.linkId;

return(   
    <QueryClientProvider client={queryClient} >
    <div className='flex flex-col'>
        <div className='w-full border-b-[1px] border-b-[##61EFFF] items-center'>
            <div className={`${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} mb-6`}>
                    <h2 className={`text-center font-semibold ${styles.heading2}`}>
                        Read, Apply, Achieve...
                    </h2>
                </div>
            </div>
        </div>   
         <div className={`${styles.flexCenter} mt-10 items-center flex flex-col`}>            
                <Post linkId={linkId} />
        </div>
        <Newsletter />    
    </div>
    </QueryClientProvider> )};

export function usePost() {
    return useQuery({
        queryKey: ['localizations', 'linkId'],
        queryFn: async () => {
            const data = await request(endpoint, gql`
            query MyQuery {
                echoesConnection {
                  edges {
                    node {
                      id
                      locale
                      tags
                      title
                      description
                      linkId
                      updatedAt
                      facade {
                        url
                        size
                      }
                      content {
                        json
                      }
                      localizations {
                        content {
                          html
                        }
                        title
                        description
                      }
                      audio {
                        url
                      }
                    }
                  }
                }
              }`
);
            return data.echoesConnection.edges
        }
        })};

function Post ({linkId}) {
    const queryClient = useQueryClient();
    let {status, data, error, isFetching}= useLetter(linkId);
    let text = "";
    if (status=== 'loading') {
        text = "Loading..."
    } else if (status=== 'success') {
        text = data.content.html
    }
    let source = "";
    if (status=== 'success' && data.audio != null) {
      source = data.audio.url
    }

    return (
        <div className={`${styles.marginX} sm:px-20`}>
            <div>
                {status==='loading' ? ( 'Loading...') : 
                status === 'error' ? ( <span>Error: {error.message}</span>) : 
                (<> <div className={`${styles.boxWidth} sm:min-w-[520px] min-w-[240px]`}> 
                    <div className="relative overflow max-h-[480px] sm:h-96 h-48 mb-4">
                        <img src={data.facade.url} alt ={data.title} className='object-top object-cover absolute sm:h-96 h-48 w-full rounded-[10px]'></img>
                    </div>
                    <audio src={source} controls className='sm:mt-0 mt-2 rounded-[20px] flex-none max-w-[360px] mb-10 bg-dimWhite'/>
                    <div className={`w-full`}>
                      <div className='flex flex-col'>
                        <h2 className={`${styles.heading2}`}> {data.title}</h2>
                      </div>
                        <div className={`${styles.paragraph} py-6 text-White sm:text-[20px] text-[18px]`} > {parse(text)}

                        </div>
                    </div>

                    </div>
                    <div>{isFetching ? 'Background Updating...' : ''}</div>
                    </>)}
            </div>
        </div>
    )
}

function useLetter(linkId) {
const {i18n} = useTranslation();
const locales = i18n.resolvedLanguage;

return useQuery({
    queryKey: ['localizations', 'linkId'],
    queryFn: async () => {
    const letter = await request(endpoint, gql`
    query MyQuery {
        echoesConnection (where: {linkId: "${linkId}"}, locales: ${locales}) {
          edges {
            node {
              id
              locale
              tags
              title
              description
              linkId
              updatedAt
              facade {
                url
                size
              }
              content {
                html
              }
              localizations {
                content {
                  html
                }
                title
                description
              }
              audio {
                url
              }
            }
          }
        }
      }`);

    return letter.echoesConnection.edges[0].node

}}
)}