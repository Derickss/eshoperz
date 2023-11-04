import { User as LoggedInUser } from "@supabase/auth-helpers-nextjs";
import { useSessionContext,useUser as useSupaUser } from "@supabase/auth-helpers-react";
import { createContext, useContext, useEffect, useState } from "react";
import { Database } from "@/shoppers";


type UserContextType ={
    accessToken:string|null;
    user:LoggedInUser|null;
    isLoading:boolean;
    // adminUser:Database;
    // role:Database;
}

export const UserContext = createContext<UserContextType|undefined>(undefined);

export interface Props{
    [propName:string]:any;
}

export const MyUserContextProvider = (props:Props) =>{
    const {
        session,
        isLoading:isLoadingUser,
        supabaseClient:supabase
    } = useSessionContext();

    const user = useSupaUser();
    const accessToken = session?.access_token?? null;
    const[isLoadingData,setIsLoadingData] = useState(false);


    const getUserDetails = () =>supabase
    .from('user')
    .select('*')
    .single();

    const getUserRole = ()=>supabase
    .from('role')
    .select('*')


    // useEffect(()=>{
    //     if (user &&!isLoadingData) {
    //         setIsLoadingData(true);
    //     }else if(!user && isLoadingUser && !isLoadingData){
            
    //     }
    //     setIsLoadingData(false);
    // },[user,isLoadingData])

    const value = {
        accessToken,
        user,
        isLoading:isLoadingUser||isLoadingData
    }

    return <UserContext.Provider value={value} {...props}/>
}

export const useUser=()=>{
 const context = useContext(UserContext);
 if(context===undefined){
    throw new Error('User must be used within a MyUserContextProvider');
 }       
 return context;
}
