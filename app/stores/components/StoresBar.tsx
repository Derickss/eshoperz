'use client'

import EButton from '@/app/components/EButton'
import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface StoresBarProps{
    className?:string;
}

const StoresBar:React.FC<StoresBarProps> = ({className}) => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/stores/create')
    }
    return (
        <div className={twMerge(`px-4 py-1 rounded-md justify-between`,className)}>
            <h1 className='text-2xl font-bold font-sans'>Stores</h1>
            <EButton className='rounded-md py-1 text-white' onClick={handleClick}>Create</EButton>
        </div>
    )
}

export default StoresBar
