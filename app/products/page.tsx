
import React from 'react'
import OutlinedButton from '../components/OutlineButton'
import { MdOutlineAddBox } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import useProductModal from '@/hooks/useProductModal'
import getProducts from '@/actions/getProducts'
import SearchTopbar from './componets/SearchTopbar'
import ProductItem from './componets/ProductItem'
import getSearchedProductByName from '@/actions/getSearchedProductByName'
import ProductSearchContent from './componets/ProductSearchContent'
import Image from 'next/image'

interface SearchProps {
  searchParams: {
    name: string
  }
}

export const revalidate = 0;


const ProductsComp: React.FC<SearchProps> = async ({ searchParams }: SearchProps) => {
  const products = await getSearchedProductByName(searchParams.name)


  return (
    <div className='flex overflow-auto  max-h-full'  id='main'>
      <div className='flex flex-col flex-1' id='title_items'>
        <SearchTopbar className='sticky top-0 z-10'/>
        <ProductSearchContent
        className='flex flex-wrap'
          products={products}
        />
      </div>
      <div className='w-[300px] h-fit mx-2 mb-2 px-2 py-2 sticky top-0 z-10'>
        <h1 className='border border-neutral-500 rounded-md px-2 py-1 text-center'>
          Use Tags to Filter your search
        </h1>
      </div>
    </div>

  )
}

export default ProductsComp


