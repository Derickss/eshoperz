import { Product } from './../types/appTypes';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { cookies } from "next/headers";

const deleteProduct =  async(id:string,image:string):Promise<boolean> =>{
    const supabase = createServerComponentClient({
        cookies: cookies,
    });

    const {status,error} = await supabase
    .from("products")
    .delete()
    .eq('id',id)
    
    if (!error){
        const {data} = await supabase.storage.from('images').remove([`${image}.jpg`])
        return true;
    }else return false
 }


 export default deleteProduct;