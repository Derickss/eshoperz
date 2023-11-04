'use client'

import { useEffect, useState } from "react";
import AuthModal from '@/app/components/AuthModal'
import AddProductModal from "@/app/products/componets/AddProductModal";
import UpdateProductModal from "@/app/products/componets/UpdateProductModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AddProductModal />
            <UpdateProductModal/>
            <AuthModal />
        </>
    )
}


export default ModalProvider;