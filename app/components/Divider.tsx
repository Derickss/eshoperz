import React from 'react'
import { twMerge } from 'tailwind-merge';

interface DividerProps {
    size: string;
    isVertical: true;
}


const Divider: React.FC<DividerProps> = ({
    size,
    isVertical
}) => {
    if (isVertical) {
        return (
            <div className={twMerge(`
            bg-transparent`,size)}/>
        )
    }
    return (
        <div />
    )

}

export default Divider
