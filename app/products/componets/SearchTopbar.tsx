'use client'

import OutlinedButton from '@/app/components/OutlineButton'
import useDebounce from '@/hooks/useDebounce'
import useProductModal from '@/hooks/useProductModal'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineAddBox } from 'react-icons/md'
import qs from 'query-string'
import { twMerge } from 'tailwind-merge'

interface SearchTopbarProps{
    className?:string;
}


const SearchTopbar:React.FC<SearchTopbarProps> = ({
    className
}) => {

    const { onOpen, isOpen } = useProductModal()
    const router = useRouter();
    const [value,setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value,500);




    useEffect(()=>{
        const query ={
            name:debouncedValue
        }

        const url = qs.stringifyUrl({
            url:'/products',
            query:query
        });
        router.push(url);
    },[debouncedValue,router]);



    const handleButtonClick = () => {
        if (!isOpen) {
          onOpen();
        }
      }

    return (
        <div className={twMerge('flex bg-neutral-900 py-2 items-center justify-between mt-2 rounded-b-md ms-2',className)} id='search_button'>
            <div className='flex items-center flex-1 relative' id='search'>
                <h1 className='font-serif font-bold text-xl'>Products</h1>
                <input type='text' placeholder="Product Search"
                value={value}
                onChange={(e)=>setValue(e.target.value )}
                    className='rounded-lg mx-4 text-lg px-2 py-1 bg-neutral-800 flex-1'
                />
                <BsSearch size={16} className='absolute right-8' />
            </div>
            <OutlinedButton
                icon={MdOutlineAddBox}
                buttonLabel='ADD PRODUCT'
                className='mx-4'
                onClick={handleButtonClick}
            />
        </div>
    )
}

export default SearchTopbar
