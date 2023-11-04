'use client'
import useLoadImage from '@/hooks/useLoadImage'
import { Product } from '@/types/appTypes'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { MdMoreVert } from 'react-icons/md'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import deleteProduct from '@/actions/deleteProduct'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import useProductModal from '@/hooks/useProductModal'
import useProductUpdateModal from '@/hooks/useProductUpdateModal'



const ProductItem: React.FC<Product> = ({
    id,
    name,
    image,
    price,
    description,
    active,
    category
}) => {
    const imageUrl = useLoadImage(image)
    const supabase = useSupabaseClient()
    const { onClose, isOpen,onOpen,updateProduct,product } = useProductUpdateModal();
    const router = useRouter();

    const handleEditClick = () => {
       updateProduct({id,name,image,price,description,active,category} as Product)
       onOpen();
    }

    const handleDeleteClick = async () => {
        // deleteProduct(id,image)
        const{error:storageError,data} = await supabase.storage.from('images').remove([image])
        const { error,status} = await supabase.from('products').delete().eq('id', id)
        router.refresh();
    }



    return (
        <div className='w-[180px] h-[240px] rounded-md bg-neutral-700 flex flex-col items-center m-2 p-1 relative'>
            <div className='w-full h-[120px] relative'>
                <Image src={imageUrl} alt={''} className='rounded-lg object-cover' fill />
            </div>
            <DropdownMenu.Root >
                <DropdownMenu.Trigger className='absolute top-2 right-[5px]'>
                    <div className='opacity-80 p-[1px] bg-neutral-800  rounded-md  flex items-center justify-center hover:opacity-100'
                    >
                        <MdMoreVert size={24} className="text-white" />
                    </div>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className='px-2 border-green-500 rounded-md border bg-neutral-700'>
                    <DropdownMenu.Item className='cursor-pointer' onClick={handleEditClick}>Edit</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item className='cursor-pointer' onClick={handleDeleteClick}>Delete</DropdownMenu.Item>
                </DropdownMenu.Content >
            </DropdownMenu.Root>

            <h1 className='font-serif font-bold text-lg self-start ms-4 mt-4'>{name}</h1>
            <p className='font-sans font-thin text-sm text-neutral-300  self-start ms-2 line-clamp-2'>{description}</p>
            <h2 className='font-serif font-bold self-start ms-2'>{price}/=</h2>
        </div>
    )
}




export default ProductItem
