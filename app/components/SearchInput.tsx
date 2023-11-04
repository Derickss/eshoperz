'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge';

interface SearchInputProps {
    className: string;
}


const SearchInput: React.FC<SearchInputProps> = ({
    className
}) => {
    const router = useRouter();
    const [value, setValue] = useState<string>('');
    const [isFocused,setIsFocused] = useState(false);
    const bgOuline=isFocused ?'border-white':'border-neutral-500';



    return (
        <div className={twMerge(`
        border
        relative
        group
        rounded-full
        items-center
        px-4
        py-1
        mx-4
        mb-2
        `, className,bgOuline)}>

            <input
                className='
                outline-none
                w-full
                px-2
                py-1
                mr-4
                group
                bg-transparent
                '
                placeholder='Enter your search'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={()=>setIsFocused(true)}
                onBlur={()=>setIsFocused(false)}
            />
            <BiSearch size={26} />
        </div>
    )
}

export default SearchInput
