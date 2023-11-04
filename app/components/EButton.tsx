import React,{ ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge"

interface EButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}


const EButton = forwardRef<HTMLButtonElement, EButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(`
            w-fit
            rounded-full
            bg-green-500
            border
            border-transparent
            px-8
            py-3
            disabled:cursor-not-allowed
            disabled:opacity-50
            text-black
            font-bold
            hover:opacity-75
            transition
 `,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})


EButton.displayName = 'Button';

export default EButton;