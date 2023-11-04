import React from 'react'
import { twMerge } from 'tailwind-merge';

interface StoreTitleProps{
    className?:string;
}


const StoreTitle:React.FC<StoreTitleProps> = ({
    className
}) => {
  return (
    <div className={twMerge(`
    bg-neutral-800
    px-4
    py-2
    grid
    gap-1
    grid-cols-12`,className)}>
        <h1 className='col-start-1 col-span-1 justify-self-center'>Logo</h1>
        <h1 className='col-start-2 col-span-1'>Store ID</h1>
        <h1 className='col-spart-3 col-span-2 '>Name</h1>
        <h1 className='col-start-5 col-span-2'>Email</h1>
        <h1 className='col-start-7 col-span-2 '>Phone</h1>
        <h1 className='col-start-9 col-span-2'>Address</h1>
        <h1 className='col-start-11 col-span-1 '>CreatedAt</h1>
        <h1 className='col-start-12 col-span-1'>Active</h1>
    </div>
  )
}

export default StoreTitle
