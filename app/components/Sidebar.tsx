'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { BiCartAdd, BiStoreAlt } from 'react-icons/bi'
import { RiEBike2Line, RiStarSLine } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import { MdOutlineSell, MdOutlineCategory } from 'react-icons/md'
import { HiHome, HiUsers } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge';
import { SidebarItem } from './SidebarItem';
import AppLogo from './AppLogo'
import Topbar from './Topbar'
import { IconType } from 'react-icons'
import { useUser } from '@supabase/auth-helpers-react'
import Image from 'next/image'
import useAuthModal from '@/hooks/useAuthModal'



export type NavItem = {
    icon: IconType;
    name: string;
    active: boolean;
    href: string;
}

interface SidebarProps {
    children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();
    const { onOpen } = useAuthModal();
    const user = useUser();

    useEffect(() => {
        if (!user) {
            onOpen()
        }
    }, [onOpen, user])


    const routes = useMemo(() => [
        {
            icon: HiHome,
            name: 'Dashboard',
            active: pathname === '/',
            href: '/',
        },
        {
            icon: BiCartAdd,
            name: 'Orders',
            active: pathname === '/orders',
            href: '/orders',
        },
        {
            icon: HiUsers,
            name: 'Users',
            active: pathname === '/users',
            href: '/users',
        },
        {
            icon: MdOutlineSell,
            name: 'Products',
            active: pathname === '/products',
            href: '/products',
        },
        {
            icon: BiStoreAlt,
            name: 'Stores',
            active: pathname === '/stores',
            href: '/stores',
        },
        {
            icon: MdOutlineCategory,
            name: 'Categories',
            active: pathname === '/category',
            href: '/category',
        },
        {
            icon: RiEBike2Line,
            name: 'Couriers',
            active: pathname === '/couriers',
            href: '/couriers',
        },
        {
            icon: RiStarSLine,
            name: 'Reviews',
            active: pathname === '/reviews',
            href: '/reviews',
        },
        {
            icon: FiLogOut,
            name: 'Logout',
            active: pathname === '#',
            href: '#',
        }

    ], [pathname])

    return (

        user ? <div className={twMerge(`
        flex
        h-full
        `)}>

            <div className='
                hidden
                md:flex
                flex-col
                gap-y-2
                h-full
             bg-black
                w-[350px]
                p-2'>

                <AppLogo className='flex' />

                <div className='
                flex
                flex-col
                w-full
                h-full
                bg-neutral-900
                rounded-md
                gap-y-2
                pt-2
                '>
                    {
                        routes.map((item) => (
                            <SidebarItem
                                key={item.name}
                                {...item} />
                        ))
                    }
                </div>
            </div>

            <div className='
            w-full
            mx-2
            my-2
            flex
            flex-col
            rounded-md
            gap-y-2
            box-content
            '>
                <Topbar items={routes} />
                <main
                    className='
                 bg-neutral-900
                 px-2
                 py-2
                 rounded-md
                 h-full
                 max-h-full
                 relative
                 overflow-auto
                 '>
                    {children}
                </main>
            </div>
        </div> : 
        <main className='w-full h-full flex flex-col relative'>
            <div className='w-full h-full relative'>
            <Image src={'/images/background.jpg'} alt='#' fill />
            </div>

                    <h1 className='absolute top-[5%] left-[5%] text-9xl font-bold font-serif z-30'>E-Shopperz</h1>
        </main>
    )

}

export default Sidebar
