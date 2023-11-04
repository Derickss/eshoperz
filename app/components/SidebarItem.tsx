'use client'

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";


interface SidebarItemProps{
    icon:IconType;
    name:string;
    active?:boolean;
    href:string;
}

export const SidebarItem:React.FC<SidebarItemProps> = ({
    icon:Icon,
    name,
    active,
    href

})=>{
    let isLink = name!=='Logout'

    const supabase = useSupabaseClient();

    const handleLogOut = ()=>{
        supabase.auth.signOut()
    }

    return(
        <>
            {
                
                    isLink ?
                    <Link href={href} className={twMerge(`
                    flex
                    flex-row
                    h-auto
                    w-3/4
                    items-center
                    gap-x-4
                    px-2
                    py-1
                    rounded-md
                    text-lg
                    text-neutral-300
                    font-md
                    font-medium
                    hover:translate-x-2
                    hover:text-green-200
                    transition
                    `,active &&'text-green-500 translate-x-3 border-s border-green-400')}
                    >
                        <Icon size={26}/>
                        <p className="truncate w-full">{name}</p>
                    </Link> 
                    :
                    <div
                    onClick={handleLogOut}
                    className={twMerge(`
                    flex
                    flex-row
                    h-auto
                    w-3/4
                    items-center
                    gap-x-4
                    px-2
                    py-1
                    rounded-md
                    text-lg
                    text-neutral-300
                    font-md
                    font-medium
                    hover:translate-x-2
                    hover:text-green-200
                    transition
                    hover:cursor-pointer
                    `,active &&'text-green-500 translate-x-3 border-s border-green-400')}
                    >
                        <Icon size={26}/>
                        <p className="truncate w-full">{name}</p>
                    </div> 
                
            }
        </>
    )
}


/* 

<Link href={href} className={twMerge(`
            flex
            flex-row
            h-auto
            w-3/4
            items-center
            gap-x-4
            px-2
            py-1
            rounded-md
            text-lg
            text-neutral-300
            font-md
            font-medium
            hover:translate-x-2
            hover:text-green-200
            transition
            `,active &&'text-green-500 translate-x-3 border-s border-green-400')}
            >
                <Icon size={26}/>
                <p className="truncate w-full">{label}</p>
            </Link>


*/