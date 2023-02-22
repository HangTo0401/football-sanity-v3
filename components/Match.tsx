import { default as NotesIcon } from './../public/notes.png'
import HeaderTab from './HeaderTab'
import LiveScore from './LiveScore'
import FavoriteList from './FavoriteList'
import Result from './Result'
import Schedule from './Schedule'
import Image from 'next/image'

export default function Match() {
    const childrenTabList = [
        {
          isParentMenu: false,
          icon: <Image src={NotesIcon} alt={'liveScoreIcon'} />,
          href: "/?childTabOne=true",
          name: "Tỷ số trực tuyến",
          isSelected: false,
          content: <LiveScore />,
        },
        {
          isParentMenu: false,
          icon: <Image src={NotesIcon} alt={'favoriteIcon'} />,
          href: "/?childTabTwo=true",
          name: "Danh sách ưa thích",
          isSelected: false,
          content: <FavoriteList />,
        },
        {
          isParentMenu: false,
          icon: <Image src={NotesIcon} alt={'resultIcon'} />,
          href: "/?childTabTwo=true",
          name: "Kết quả",
          isSelected: false,
          content: <Result />,
        },
        {
          isParentMenu: false,
          icon: <Image src={NotesIcon} alt={'scheduleIcon'} />,
          href: "/?childTabTwo=true",
          name: "Lịch thi đấu",
          isSelected: false,
          content: <Schedule />,
        },
      ];

    return(
        <>
            ABC
            <nav>
              {/* {childrenTabList.map((tab) => (
                 <HeaderTab isParentMenu={tab.isParentMenu} icon={tab.icon} key={tab.name}/>
              ))} */}
            </nav>
        </>
    )
}