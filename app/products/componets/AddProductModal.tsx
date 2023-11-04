'use client'
import AddModal from '@/app/components/AddModal';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useSessionContext, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import useProductModal from '@/hooks/useProductModal';
import Input from '@/app/components/Input';
import useUploadModal from '@/hooks/useUploadModal';
import EButton from '@/app/components/EButton';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import toast from 'react-hot-toast';
import uniqid from 'uniqid';
import * as Switch from '@radix-ui/react-switch';
import { supabase } from '@supabase/auth-ui-shared';
import { Product } from '@/types/appTypes';
import RadioButton from '@/app/components/RadioButton';





const AddProductModal = () => {
    const [checked, setChecked] = useState(true);


    const user = useUser();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useProductModal();

    const [isLoading, setIsLoading] = useState(false);
    const uploadModal = useUploadModal();
    const supabaseCLient = useSupabaseClient();



    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            image:'',
            name:'',
            description:'',
            price: '',
            category: '',
            active: '',
            user_id:''
        }
    })
    useEffect(() => {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose])

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values: FieldValues) => {
        try {
            setIsLoading(true);
            const imageFile = values.image?.[0]

            if (!imageFile || !user) {
                toast.error('Missing field!');
                return;
            }

            const uniqueID = uniqid()

            //Upload image
            const {
                data: imageData,
                error: imageError
            } = await supabaseCLient
                .storage
                .from('images')
                .upload(`${values.name}-${uniqueID}`, imageFile, {
                    cacheControl: '3600',
                    upsert: false
                });


            if (imageError) {
                setIsLoading(false)
                console.log(imageError.message)
                return toast.error('Failed Image upload')
            }
          
            const {
                error: supabaseError
            } = await supabaseCLient
                .from('products')
                .insert({
                    name: values.name,
                    description: values.description,
                    price: Number(values.price),
                    category: values.category,
                    active: checked,
                    image: imageData.path,
                    user_id:user.id,
                })


            if (supabaseError) {
                setIsLoading(false);
                console.log(supabaseError.message)
                return toast.error(supabaseError.message)
            }
           

            router.refresh();
            setIsLoading(false);
            toast.success('Product created');
            reset();
            uploadModal.onClose();


        } catch (e) {
            toast.error('Something went wrong')
            console.log(e)
        } finally {
            setIsLoading(false);
            console.log('Aleast this is working')
            uploadModal.onClose();
            router.refresh();

        }

    }







    return (
        <AddModal
            isOpen={isOpen}
            onChange={onChange}
            title={"Add Product"}
            description={"Item description"}
        >


            <form className='flex flex-col border-blue-800 py-2'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='py-2 flex flex-col'>
                    <h1 className='ms-2 font-bold text-xl'>Image</h1>
                    <div className='relative w-[100px] h-[100px] rounded-md border-white boder self-center'>
                        <Image src={'/images/placeholder.jpg'} alt='#' fill className='rounded-full' />
                    </div>
                    <Input type='file'
                        id='image'
                        accept='image/*'
                        {...register('image', { required: true })}

                    />
                </div>

                <div className='py-2'>
                    <h1 className='ms-2 font-bold text-xl'>Name</h1>
                    <Input type="text" className='rounded-md font-serif text-lg px-3 py-2 mt-1'
                        placeholder='Enter name'
                        {...register('name', { required: true })}
                    />
                </div>

                <div className='py-2'>
                    <h1 className='ms-2 font-bold text-xl'>Description</h1>
                    <textarea id="description" rows={2}
                        className='w-full rounded-md p-3 font-serif text-lg mt-1'
                        {...register('description', { required: true })}
                    ></textarea>
                </div>

                <div className='py-2'>
                    <h1 className='ms-2 font-bold text-xl'>Price</h1>
                    <Input type="number" className='rounded-md font-serif text-lg px-3 py-2 mt-1'
                        {...register('price', { required: true })}
                        placeholder='Enter price' />
                </div>

                <div className='py-1 border border-neutral-500 flex items-center me-2 rounded-md'>
                    <h1 className='ms-2 font-bold text-xl'>Category</h1>
                    <Input type="text" className='rounded-md font-serif text-lg px-3 py-0 ms-2 mt-1'
                        {...register('category', { required: true })}
                        placeholder='Enter name' />
                </div>

                <div className='flex gap-2 py-1 border border-neutral-500 me-2 rounded-md mt-2 bg-neutral-700 px-2'>
                <RadioButton
                        title='Active'
                        onChange={(e) => { setChecked(e) }}
                    />
                </div>
                <EButton className={twMerge('rounded-lg mt-4 self-end me-3', isLoading ? 'disabled:cursor-wait' : 'disabled:cursor-not-allowed')}
                    type='submit'
                >
                    Submit
                </EButton>
            </form>




        </AddModal>
    )
}

export default AddProductModal
//spss