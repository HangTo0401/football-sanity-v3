import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HeaderTab from './HeaderTab'
import Match from './Match'
import News from './News'

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  prefixTitle,
  title,
  description,
  level,
}: {
  prefixTitle: string,
  title: string
  description?: any[]
  level: 1 | 2
}) {
  const { query } = useRouter();
  const isTabOneSelected = !!query.tabOne;
  const isTabTwoSelected = !!query.tabTwo;

  switch (level) {
    case 1:
      return (
        <>
          <header className="w-5/6 flex flex-col items-center md:flex-row md:justify-between">
          <h1 className="font-bold leading-tight tracking-tighter md:pr-8">
            <div className="text-2xl">
              <span className="text-green">
                {prefixTitle}
              </span>{' '}
              <span className='text-white'>
                {title}
              </span>
            </div>
          </h1>
          <nav className={`${styles.headerTab}`}>
            <HeaderTab isParentMenu="true" icon='' href="/?tabOne=true" name="DANH SÁCH TRẬN" isSelected={isTabOneSelected} content={<Match/>}/> 
            <HeaderTab isParentMenu="true" icon='' href="/?tabTwo=true" name="TIN TỨC" isSelected={isTabTwoSelected} content={<News/>}/>
          </nav>
          {/* <h4
            className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4> */}
        </header>
        {isTabOneSelected ?
          <div className="w-5/6 h-14 bg-light-pupple rounded-t-lg">
            <Match/>
          </div> :
          <div>
            <News/>
          </div>
        }
        </>
      )

    case 2:
      return (
        <header>
          <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
