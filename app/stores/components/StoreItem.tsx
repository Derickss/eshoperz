'use client'
import { Store } from '@/types/appTypes';
import Image from 'next/image';
import React from 'react'
import { twMerge } from 'tailwind-merge';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import useLoadImage from '@/hooks/useLoadImage';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { supabase } from '@supabase/auth-ui-shared';
import { useRouter } from 'next/navigation';

interface StoreItemProps {
  className?: string;
  store: Store
}

const StoreItem: React.FC<StoreItemProps> = ({ className, store }) => {
  const Icon = store.active ? ImCheckboxChecked : ImCheckboxUnchecked;
  const imageUrl = useLoadImage(store.image)
  const supabase = useSupabaseClient();
  const router = useRouter();


  const handleClick = async()=>{
    const {data,error} =await supabase
    .from('stores')
    .update({'active':!store.active})
    .eq('storeId',store.storeId)
    router.refresh()
  }


  return (
    <div className={twMerge(`
    grid
    grid-cols-12
    my-2
    items-center
    border
    border-neutral-500
    rounded-md
    mx-4
    px-2
    gap-1
    hover:bg-neutral-700 duration-500
    `, className)}>

      <div className='col-start-1 col-span-1 w-[60px] h-[60px] relative object-cover justify-self-center'>
        <Image src={imageUrl} alt='#' fill className='rounded-full' />
      </div>
      <h1 className='col-start-2 col-span-1 px-4 '>{store.storeId}</h1>
      <h1 className='col-start-3 col-span-2 px-4'>{store.name}</h1>
      <h1 className='col-start-5 col-span-2 px-4 '>{store.email}</h1>
      <h1 className='col-start-7 col-span-2 px-4'>{store.phone}</h1>
      <h1 className='col-start-9 col-span-2  px-4'>{store.address}</h1>
      <h1 className='col-start-11 col-span-1 justify-self-start ps-8'>{'2023/07/12'}</h1>
      <Icon className='col-start-12 col-span-1   justify-self-center' size={24} 
      onClick={handleClick}
      />
    </div>
  )
}

export default StoreItem
