"use client"
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import "./styles.css"
import { Menu, ArrowLeft } from 'lucide-react'
import { menuListItemLarge } from '@/lib/config'
import { Dispatch, SetStateAction } from 'react'
export default function NavSmall() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='flex flex-row justify-evenly items-center h-20 w-full bg-slate-950 fixed top-0'>
            <div className="w-1/5 bg-white h-full">

            </div>
            <div className="w-4/5 bg-slate-950 h-full flex flex-row justify-end items-center z-10">
                <Menu size={44} className='pr-2' strokeWidth="1"  onClick={() => setShowMenu(true)} />
            </div>

            <section className={clsx('bg-slate-950 absolute -right-44 top-0 h-screen w-40 z-10 pt-24 pl-6 flex flex-col items-center justify-start hide', {
                'slide': showMenu,
            })}>
                <div className="w-full h-auto absolute top-6 pl-2">
                    <ArrowLeft strokeWidth="1" onClick={() => setShowMenu(false)} />
                </div>
                {
                    menuListItemLarge.map((item, index) => {
                        return <Link href={item.href} key={item.label} className={clsx(
                            'text-white flex flex-row justify-start items-center w-full mt-2 mb-2 ', "menu-item"
                        )}>
                            <item.icon className='mr-2' strokeWidth="1" />
                            {item.label}
                        </Link>
                    })
                }
            </section>


        </div>
    )
}
