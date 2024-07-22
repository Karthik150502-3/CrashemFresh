'use client'
import clsx from 'clsx';
import Link from 'next/link';
import './styles.css';
import React, { useState } from 'react';
import { menuListItemLarge } from '@/lib/config';
export default function NavLarge() {




    return (
        <div className={clsx(
            'w-26 bg-slate-950 p-4 h-screen fixed flex flex-col items-center justify-center'
        )}>
            <div className="menu-items w-full h-auto flex flex-col items-center justify-center gap-y-5">
                {
                    menuListItemLarge.map((item, index) => {
                        return <Link href={item.href} key={item.label} className={clsx(
                            'text-white flex flex-row justify-start items-center w-full', "menu-item"
                        )}>
                            <item.icon className='mr-2' strokeWidth="1" />
                            {item.label}
                        </Link>
                    })
                }
            </div>
            <div className="h-52 other menu-items w-full flex flex-col items-center justify-center gap-y-5">

            </div>
        </div>
    )
}
