'use client'

import { useFormStatus  } from 'react-dom'
import {Button} from "@nextui-org/react";

export function ComposePostButton (){
  const { pending } = useFormStatus()

  return (
    <Button color="danger" type='submit' 
      disabled = {pending} 
      className='disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end'
    >
      {pending ? 'Subiendo..' : 'Invitar'}
    </Button>
  )
}