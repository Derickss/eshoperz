import { Product } from "@/types/appTypes";
import { create } from "zustand";

interface ProductStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useProductModal = create<ProductStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }));

export default useProductModal;
