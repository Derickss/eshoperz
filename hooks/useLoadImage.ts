
import { Product } from "@/types/appTypes";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadImage = (imageName:string)=>{
    const supabaseclient = useSupabaseClient();
    if(!imageName){
        return '/images/sample.jpg';
    }

    const {data} = supabaseclient
    .storage
    .from('images')
    .getPublicUrl(imageName)
    
    return data.publicUrl;
}

export default useLoadImage
