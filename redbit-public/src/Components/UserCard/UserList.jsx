import React from 'react'
import { UserCard } from './UserCard';
import {ScrollShadow} from "@nextui-org/react";

export const UserList = () => {
  return (
    <ScrollShadow 
      hideScrollBar 
      offset={200}
      orientation="horizontal" 
      className="max-w-[400px] max-h-[300px]"
    >
      <UserCard className="w-[800px]" />
      <UserCard className="w-[800px]" />
      <UserCard className="w-[800px]" />
    </ScrollShadow>
  )
}
