'use client'
import React, { useState } from 'react'

interface RadioButtonProps{
    className?:string;
    title:string;
    onChange:(value:boolean)=>void;
}

const RadioButton:React.FC<RadioButtonProps> = ({
    className,title,onChange
}) => {
const [option,changeOption] = useState<string>('enable')


const handleOptionChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  changeOption(e.target.value)
  onChange(e.target.value=='enable')
}

  return (
    <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-sans'>{title}</h1>
      <div className='flex items-center gap-2 font-light text-lx'>
        <input type='radio' value={'enable'} onChange={handleOptionChange} checked={option==='enable'}/><label htmlFor="active">Enable</label>
        <input type='radio' value={'disable'} onChange={handleOptionChange} checked={option==='disable'}/><label htmlFor="active">Disable</label>
      </div>
    </div>
  )
}

export default RadioButton
