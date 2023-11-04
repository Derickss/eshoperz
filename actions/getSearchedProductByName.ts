import { Product } from "@/types/appTypes";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getProducts from "./getProducts";

const getSearchedProductByName = async (name: string): Promise<Product[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!name) {
    const allProducts = await getProducts();
    return allProducts;
  }

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${name}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }
  return (data as any) || [];
};

export default getSearchedProductByName;
