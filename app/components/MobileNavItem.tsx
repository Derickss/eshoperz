import React from 'react'
import { IconType } from 'react-icons';

interface ModileNavItemProps {
    icon: IconType;
    label: string;
    active: boolean;
    href: string;
}

const MobileNavItem:React.FC<ModileNavItemProps> = ({
    icon:Icon,
    label,
    active,
    href
}) => {
    
    return (
        <div
            className='
            flex
            flex-col
            justify-center
            items-center
            text-white
            '>
                <Icon size={24}/>
                {/* <p>{label}</p> */}
        </div>
    )
}

export default MobileNavItem
