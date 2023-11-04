'use client'
import EButton from '@/app/components/EButton'
import Input from '@/app/components/Input'
import MaterialInput from '@/app/components/MaterialInput'
import MaterialInputArea from '@/app/components/MaterialInputArea'
import RadioButton from '@/app/components/RadioButton'
import { useSession, useSessionContext, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm,Controller } from 'react-hook-form'
import toast from 'react-hot-toast'
import { BiSolidDashboard } from 'react-icons/bi'
import { FaStoreAlt } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import uniqid from 'uniqid'

import { URL,pathToFileURL,fileURLToPath } from 'url'

const CreateStore = () => {
    const router = useRouter()
    const navigateBack = () => {
        router.back();
    }
    const user = useUser();
    const supabase = useSupabaseClient();
    const { session } = useSessionContext();
    const [isloading, setIsLoading] = useState(false);
    const [active, setActive] = useState(true);
    const { register, handleSubmit, reset } = useForm<FieldValues>({
        defaultValues: {
            image: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            about: '',
            active: true
        }
    });

    useEffect(() => {
        if (session) {
            // router.refresh();
        }
    }, [session, router]);

    const onSubmit: SubmitHandler<FieldValues> = async (values: FieldValues) => {
        console.log('this is working')
        try {
            setIsLoading(true)
            const imageFile = values.image?.[0];
            console.log(imageFile)

            if (!imageFile || !user) {
                toast.error('Missiong field');
                console.log('file not found')
                return;
            }
            const uniqueID = uniqid();
            //Upload image

            const {
                data: imageData,
                error: imageError
            } = await supabase
                .storage
                .from('images')
                .upload(`${values.name}-${uniqueID}`, imageFile, {
                    cacheControl: '3600',
                    upsert: false
                });

            console.log('working well')

            if (imageError) {
                setIsLoading(false)
                console.log('not working:', imageError)
                return toast.error('Failed to upload image')
            }

            console.log('Now working on db...', imageData.path)

            const { error: supabaseError, data } = await supabase
                .from('stores')
                .insert({
                    name: values.name,
                    image: imageData.path,
                    email: values.email,
                    phone: values.phone,
                    address: values.address,
                    about: values.about,
                    user_id: user.id,
                    active: active
                })
            setIsLoading(false)
            router.back();

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
            router.back();
        }
    }


    return (
        <form className='bg-neutral-800 px-2 py-2 rounded-md flex flex-col max-h-full overflow-auto'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='flex items-center gap-2 my-4 mx-4 text-xl font-sans'>
                <BiSolidDashboard />
                <h1>/</h1>
                <FaStoreAlt />
                <h1 className='hover:underline cursor-pointer'
                    onClick={navigateBack}
                >Stores</h1>
                <h1>/Create</h1>
            </div>

            <div className='flex gap-2 items-center mx-4'>
                <FaArrowLeft size={24} onClick={navigateBack} className='hover:opacity-30' />
                <h1 className='text-3xl font-bold'>Create Store</h1>
            </div>


            <div className='grid grid-cols-3 m-4 gap-4'>

                <div className='col-start-1 flex flex-col items-center font-sans font-bold gap-2'>
                    <div className='relative w-[300px] h-[300px] mx-4'>
                        <Image src={'/images/placeholder.jpg'} className='rounded-full' alt='#' fill />
                    </div>
                    <Input
                        type='file'
                        accept='image/*'
                        {...register('image', { required: true })}
                    />
                </div>

                <div className='col-start-2 flex flex-col gap-2'>
                    <MaterialInput
                        title='Name'
                        type='text'
                        {...register('name', { required: true })}
                    />
                    <MaterialInput
                        title='Email'
                        type='email'
                        {...register('email', { required: true })}
                    />
                    <MaterialInput
                        title='Phone'
                        type='tel'
                        {...register('phone', { required: true })}
                    />

                    <RadioButton
                        title='Active'
                        onChange={(e) => { setActive(e) }}
                    />

                </div>



                <div className='col-start-3 flex flex-col gap-2'>

                    <MaterialInput
                        title='Address'
                        type='text'
                        {...register('address', { required: true })}
                    />

                    <MaterialInputArea
                        id='about'
                        title='About'
                        {...register('about', { required: true })}
                    />
                </div>

            </div>

            <EButton className='rounded-md py-1 px-4 text-xl text-white self-end me-4 mt-2' type='submit'>Save</EButton>
        </form>
    )
}

export default CreateStore
