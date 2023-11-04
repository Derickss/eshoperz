import { Product } from "@/types/appTypes";
import { create } from "zustand";

interface ProductUpdateStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  product: Product;
  updateProduct:(p:Product)=>void
}

const useProductUpdateModal = create<ProductUpdateStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    product: {} as Product,
    updateProduct: (p: Product) => {
      const newProduct = { ...p };
      set((state) => ({
        product: newProduct,
      }));
    },
  }));

export default useProductUpdateModal;
