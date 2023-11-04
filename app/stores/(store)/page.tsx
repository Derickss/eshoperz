import React from 'react'
import Modal from '../../components/Modal'
import EButton from '../../components/EButton'
import getStores from '@/actions/getStores'
import StoreItem from '../components/StoreItem'
import StoreTitle from '../components/StoreTitle'
import StoresBar from '../components/StoresBar'

const Stores = async () => {

  const stores = await getStores();


  return (
    <div className='bg-neutral-900 h-full max-h-full overflow-auto rounded-md flex flex-col'>
      <StoresBar className='flex h-fit items-center '/>
      <StoreTitle className='mx-4 my-2 font-sans font-bold rounded-md' />
      <div className='mx-4 my-2 font-sans font-bold rounded-md'>
        {
          stores.map((store) =>
            <StoreItem
              key={store.storeId}
              store={store}
            />
          )
        }
      </div>
    </div>
  )
}

export default Stores


