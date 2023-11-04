import { Product } from '@/types/appTypes';
import React from 'react'
import ProductItem from './ProductItem';
import { twMerge } from 'tailwind-merge';

interface ProductSearchContentProps {
  className:string;
  products: Product[];
}


const ProductSearchContent: React.FC<ProductSearchContentProps> = ({
  className,products
}) => {

  if (products.length === 0) {
    return <div className='
    flex flex-col gap-y2 w-full px-6 text-neutral-400'>
      No product found
    </div>;
  }

  return (
    <div className={twMerge('bg-neutral-800 rounded-md m-2 justify-start',className)}>
      {
        products.map((product) =>
          <ProductItem key={product.id}
            {...product}
          />
        )
      }
    </div>
  )
}

export default ProductSearchContent
