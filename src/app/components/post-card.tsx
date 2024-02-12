'use client'
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";
import Link from 'next/link'
import { IconMessageChatbot, IconChartAreaLine, IconShare3 } from '@tabler/icons-react';

export default function PostCard({
  userFullName,
  userName,
  avatarUrl,
  content
}:{
  userFullName : string
  userName : string
  avatarUrl : string
  content : string
}) {
  
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-2">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-700">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-500">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-s text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconChartAreaLine className='w-5 h-5'/>
        </button>
        <button>
          <IconMessageChatbot className='w-5 h-5'/>
        </button>
        <button>
          <IconShare3 className='w-5 h-5'/>
        </button>
      </CardFooter>
    </Card>
  );
}
