import Image from 'next/image';
import React from 'react'
import { twMerge } from 'tailwind-merge';
import EButton from './EButton';

interface UserCompProps {
    className: string;
    name:string;
    avatar:string;
}


const UserComp: React.FC<UserCompProps> = ({
    className,
    name,
    avatar
}) => {
    return (
        <div className={twMerge(`
    flex
    gap-x-2
    mr-8
    items-center
    justify-end
    `, className)}>
            <h1>
                {name}
            </h1>
            <div className='w-10 h-10 relative '>
                <Image 
                // src={'/images/sample.jpg'}
                src={avatar}
                alt='sample'
                fill
                className='object-cover rounded-full'
                />
            </div>
        </div>
        
    )
}

export default UserComp
