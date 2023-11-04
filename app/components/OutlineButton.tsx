import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge"

interface OutlinedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconType;
    buttonLabel: string
}


const OutlinedButton = forwardRef<HTMLButtonElement, OutlinedButtonProps>(({
    className,
    icon: Icon,
    buttonLabel,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(`
            w-fit
            rounded-lg
            bg-transparent
            border
            border-green-500
            px-3
            py-1
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
            <div className="flex gap-2 items-center text-green-500">
                <Icon size={26} />
                <h1>{buttonLabel}</h1>
            </div>
        </button>
    )
})


OutlinedButton.displayName = 'Button';

export default OutlinedButton;