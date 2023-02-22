import Link from 'next/link'
import ballIcon  from './../public/ball.svg'
import notesIcon  from './../public/notes.png'
import Image from 'next/image'
import styles from './HeaderTab.module.css'
import { Router } from 'next/router'

export default function HeaderTab({ isParentMenu, icon, href, name, isSelected, content }) {
    console.log(name)

    return (
        isParentMenu ? 
            <div>
                <Link href={href} style={{
                    fontSize: 15,
                    fontWeight: 600,
                    padding: 5,
                    margin: 5,
                    color: isSelected ? "#6EBE6B" : "#FFFFFF"
                }}>
                    <div className='flex flex-col items-center md:flex-row'>
                        {
                            name === 'DANH SÁCH TRẬN' ? <Image
                                priority
                                src={ballIcon}
                                height={16}
                                width={16}
                                alt="Football"
                            /> : 
                            <Image
                                priority
                                src={notesIcon}
                                height={14}
                                width={16}
                                alt="Football"
                            />
                        }
                        <span className='ml-2'>
                            {name}
                        </span>
                    </div>
                </Link>
                <div style={{width: '199px', height: '4px'}} className={isSelected ? `bg-green` : ''}></div>
                {content}
            </div>
            : <></>
    )
} 