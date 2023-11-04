import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io';



interface AddModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
}

const AddModal: React.FC<AddModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {

    return (
        <Dialog.Root
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}
        >
            <Dialog.Portal>
                <Dialog.Overlay
                    className='
                fixed
                inset-0
                '
                >
                    <Dialog.Content
                        className='
                    fixed
                    right-4
                    top-28
                    button-4
                    drop-shadow-md
                    border
                    border-neutral-700
                    rounded-md
                    bg-neutral-800
                    forcus:outline-none
                    p-[25px]
                    w-[400px]
                    max-h-[calc(100vh-100px)]
                    overflow-y-auto
                    '
                    >
                        <Dialog.Title
                            className='
                        text-xl
                        text-center
                        font-bold
                        mb-4'>
                            {title}
                        </Dialog.Title>

                        <Dialog.Description
                            className='
                        mb-5
                        text-sm
                        leading-normal
                        text-left
                        '>
                            {description}
                        </Dialog.Description>

                        <div className='p-2'>
                            {children}
                        </div>
                        <Dialog.Close>
                            <button
                                className='
                            text-neutral-400
                            hover:text-white
                            absolute
                            appearance-none
                            justify-center
                            forcus:outline-none
                            top-[10px]
                            left-[10px]
                            inline-flex
                            h-[25px]
                            w-[25px]
                            '
                            >
                                <IoMdClose />
                            </button>
                        </Dialog.Close>

                    </Dialog.Content>

                </Dialog.Overlay>

            </Dialog.Portal>

        </Dialog.Root>
    )
}

export default AddModal
