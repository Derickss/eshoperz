import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface MaterialInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const MaterialInput = forwardRef<HTMLInputElement, MaterialInputProps>(({
  className,
  title,
  type, disabled, ...props
}, ref) => {
  return (
    <div className={twMerge(`flex flex-col`,className)}>
      <h1>{`${title}*`}</h1>
      <input
        type={type}
        className='
        w-full
        px-3
        py-3
        border
        rounded-md
        border-neutral-400
        text-sm
        file:border-0
        file:bg-transparent
        file:text-sm
        file:font-medium
        placeholder:text-neutral-400
        disabled:cursor-not-allowed
        disabled:opacity-50
        focus:outline-none'
        disabled={disabled}
        ref={ref}
        {...props}
      />
    </div>
  )
})


MaterialInput.displayName = 'Input'
export default MaterialInput
