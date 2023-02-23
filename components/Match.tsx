import LiveScore from './LiveScore'
import FavoriteList from './FavoriteList'
import Result from './Result'
import Schedule from './Schedule'
import Link from 'next/link'
import Image from 'next/image'
import { default as LiveScoreIcon } from './../public/live-score.png'
import { default as LikeIcon } from './../public/like.png'
import { default as ResultIcon } from './../public/result.png'
import { default as UnionIcon } from './../public/union.png'

export default function Match() {
    const childrenTabList = [
        {
          id: 1,
          icon: <Image src={LiveScoreIcon} height={16} width={18} alt={'liveScoreIcon'}/>,
          href: "/?childTabOne=true",
          name: "Tỷ số trực tuyến",
          isSelected: false,
          content: <LiveScore />,
        },
        {
          id: 2,
          icon: <Image src={LikeIcon} height={16} width={18} alt={'favoriteIcon'}/>,
          href: "/?childTabTwo=true",
          name: "Danh sách ưa thích",
          isSelected: true,
          content: <FavoriteList />,
        },
        {
          id: 3,
          icon: <Image src={ResultIcon} height={16} width={18} alt={'resultIcon'}/>,
          href: "/?childTabThree=true",
          name: "Kết quả",
          isSelected: false,
          content: <Result />,
        },
        {
          id: 4,
          icon: <Image src={UnionIcon} height={16} width={18} alt={'scheduleIcon'}/>,
          href: "/?childTabFour=true",
          name: "Lịch thi đấu",
          isSelected: false,
          content: <Schedule />,
        },
      ];

    return(
        <>
          <nav className="h-12 grid grid-cols-4 gap-4 content-center text-sm font-semibold">
            {childrenTabList.map((link, index) => {
              return (
                <ul className={`ml-10 ${link.isSelected ? 'text-orange' : 'text-white'}`}>
                  <Link href={link.href}>
                    <li key={index}>
                      <div className="h-12 flex flex-row justify-items-center items-center">
                        <span className="mr-2">
                          {link.icon}
                        </span>
                        <span>
                          {link.name}
                        </span>
                      </div>
                    </li>
                  </Link>
                  <div style={{width: '204px', height: '4px'}} className={link.isSelected ? `bg-orange` : ''}></div>
                  {link.content}
                </ul>
              );
            })}
          </nav>
        </>
    )
}