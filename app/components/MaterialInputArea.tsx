import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface MaterialInputAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const MaterialInputArea = forwardRef<HTMLTextAreaElement, MaterialInputAreaProps>(({
  className,
  title,
  disabled, ...props
}, ref) => {
  return (
    <div className={twMerge(`flex flex-col`, className)}>
      <h1>{`${title}*`}</h1>
      <textarea
        rows={4}
        className='
        w-full
        bg-neutral-700
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


MaterialInputArea.displayName = 'Input'
export default MaterialInputArea
