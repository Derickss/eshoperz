'use client'

import React, { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {MdMoreVert} from 'react-icons/md'




const Page = () => {


  const buttonClick = () => {
    console.log('Button click..')
  }


  const { register, control, handleSubmit } = useForm<FieldValues>({
    defaultValues:{
      username:'',
      email:'',
      channel:'',
      file:null
    }
  });
  // register function is used for tracking the state of the form

  const onSubmit = (data:FieldValues) => {
      console.log(data.image)
  }

  return (
    <div className='flex'>
      <h1>Make changes</h1>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <MdMoreVert/>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className='border border-neutral-500 rounded-md px-2 py-1 items-center'>
          <DropdownMenu.Item className='hover:bg-neutral-800 px-2'>Edit</DropdownMenu.Item>
          <DropdownMenu.Separator color='indigo'/>
          <DropdownMenu.Item>Delete</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Update</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      
    </div>
  )
}

export default Page
