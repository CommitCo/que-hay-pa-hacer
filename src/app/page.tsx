import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { PostLists } from './components/posts-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'
import NavBar from './components/nav-bar-post'
import Preferencies from './components/preferencies-post'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, user_name)')
    .order('created_at', { ascending: false })

  return (
    <div>

    <NavBar/>
    <main className="flex min-h-screen flex-row items-center justify-between">
      <section className="max-w-[200] w-full">
        <Preferencies/>
      </section>
      <section className="max-w-[600px] flex-col w-full border-l border-r border-white/20 min-h-screen">
        <ComposePost userAvatarUrl ={session.user?.user_metadata?.avatar_url}/>
        <PostLists posts = {posts} />
      </section>
      <section className="max-w-[200] w-full">
        <Preferencies/>
      </section>
      
    </main>
    </div>
  )
}