'use client'
import { ComposePostButton } from './compose-post-button'
import { Avatar } from '@nextui-org/react'
import { addPost } from '../actions/add-post-action'
import { useRef } from 'react'
import {Textarea} from "@nextui-org/react";

export function ComposePost ({
  userAvatarUrl
}:{
  userAvatarUrl : string
}) {
  const formRef = useRef <HTMLFormElement>(null)
  return (
    <form ref={formRef} action={async (formData)=>{
      await addPost(formData)
      formRef.current?.reset()
    }} className= 'flex flex-row p-3 border-b border-white/20'>
      <Avatar radius="full" size="md" className="rounded-full object-contin" src={userAvatarUrl} />
      <div className= 'flex flex-1 flex-col gap-y-4'>
      <Textarea
        name='content'
        rows = {4}
        className='w-full text-xl bg-black placeholder-gray-500 mx-2'
        placeholder='¿Que hay pa hacer?'
      ></Textarea>
      <ComposePostButton />
      </div>
    </form>
  )
}