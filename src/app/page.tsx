'use client'
import { useState, useEffect } from "react";
import NavLarge from "@/components/navLarge/navLarge";
import NavSmall from "@/components/navSmall/navSmall";
import clsx from "clsx";
export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState<Boolean>(true);



  return (
    <main className="flex min-h-screen h-screen w-screen items-center justify-between flex-row m-0 pb-5 pt-5 bg-slate-400">
      <div className="h-auto absolute left-0 top-0 w-auto invisible lg:visible">
        <NavLarge />
      </div>
      <div className="h-auto absolute top-0 w-auto lg:hidden">
        <NavSmall />
      </div>

      <div className={clsx('h-screen w-screen', 'lg:pl-40', 'md:pt-20')}>
        <h1 className="text-5xl text-center text-red-700">Home Page</h1>
      </div>
    </main >
  );
}
