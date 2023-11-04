'use client'
import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import UserComp from './UserComp'
import { IconType } from 'react-icons'
import MobileNavItem from './MobileNavItem'
import { NavItem } from './Sidebar'
import EButton from './EButton'
import AuthModal from './AuthModal'
import useAuthModal from '@/hooks/useAuthModal'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { Profile } from '@/types/appTypes'
import { log } from 'console'
import { data } from 'autoprefixer'



interface TopbarProps {
    items: NavItem[];
}

const Topbar: React.FC<TopbarProps> = ({
    items
}) => {
    const {onOpen} = useAuthModal();
    const supabase = useSupabaseClient();
    const[isLoggedIn,setIsLoggedIn] = useState(false);
    const user = useUser();
    const [isLoading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [webSite, setWebSite] = useState('');
    const [avator, setAvatar] = useState<string>('');


    useEffect(()=>{
        const getProfile = async()=>{
            try{
                setLoading(true)
                let {data,error,status} = await supabase
                .from('profiles')
                .select('*')
                .eq('id',user!.id)
                .single();

                if(data){
                    setUsername(data.username)
                    setWebSite(data.website)
                    setAvatar((data as Profile).avatar_url)   
                }
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false);
            }
        }
        if(user){
            getProfile();
        }
    },[supabase,user]);

    const handleLogin = ()=>{
        onOpen();
    }

    

    return (
        <div className='
        flex
        flex-col
        w-full
        h-fit
        rounded-md
        justify-center
        bg-gradient-to-b
      from-green-600
      to-neutral-900
      '>
            <div
                className='
                w-full
                flex
                items-center
                justify-center
                p-2'>
                <h1>Have access to everything you want to buy</h1>
            </div>


            <div className='flex justify-end items-center'>
                <SearchInput className='flex flex-1 mr-32' />
                {
                    !user && <EButton
                    className='w-fit mr-8'
                    onClick={handleLogin}>
                        Login
                    </EButton>
                }

                {
                    user &&
                    <UserComp className='flex-1'
                    name={username}
                    avatar={avator}
                    /> 
                }
            </div>


            <div
                className='
                flex
                md:hidden
                justify-around
                gap-x-2
                '>
                {items.map((item) => (
                    <MobileNavItem
                        key={item.name}
                        icon={item.icon}
                        href={item.href}
                        active={item.active}
                        label={item.name}
                    />
                ))}

            </div>


        </div>
    )
}

export default Topbar
