import React from 'react'
import {FaShopify} from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

interface AppLogoProps{
    className:string;
}

const AppLogo:React.FC<AppLogoProps> = ({
    className
}) => {
    return (
        <div className={twMerge(`
    px-2
    py-2
    h-fit
    w-full
    bg-neutral-900
    rounded-t-md
    gap-x-2
    text-white
    items-center
    `, className
        )}>
            <FaShopify size={48}
            />
            <h1 className=' text-2xl font-serif font-extrabold'>
                E-shopperz
            </h1>

        </div>
    )
}

export default AppLogo
