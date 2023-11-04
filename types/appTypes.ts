export interface Profile {
    id: string | null;
    updated_at: string | null;
    username: string | null;
    full_name: string | null;
    avatar_url: string;
    website: string | null;
  }

  export interface Product{
    id:number;
    name:string;
    description:string;
    price:number;
    category:string;
    active:boolean;
    image:string;
    user_id:string;
  }
  
  export interface Store{
    storeId:number;
    name:string;
    image:string;
    email:string;
    phone:string;
    active:boolean;
    about:string;
    address:string;
    created_at:string;
  }