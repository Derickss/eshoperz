import React from 'react'
import * as DropDownMenu from '@radix-ui/react-dropdown-menu'
import { MdMoreVert } from 'react-icons/md'

interface DropMenuProps{
    menuName:string;
    className?:string;
    menuClick:()=>void;
}

const DropMenu = () => {
    return (
        <div>
            <DropDownMenu.Root>
                <DropDownMenu.Trigger className="btn">
                    <MdMoreVert size={24} className="text-white" />
                </DropDownMenu.Trigger>
                <DropDownMenu.Content>
                    <DropDownMenu.Item>
                        <h1>Edit</h1>
                    </DropDownMenu.Item>
                </DropDownMenu.Content>
            </DropDownMenu.Root>
        </div>
    )
}

export default DropMenu
