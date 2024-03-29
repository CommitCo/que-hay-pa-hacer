import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Authbutton } from './auth-button-client';

export async function AuthButtonServer (){
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()


  return <Authbutton session={session}/>
}