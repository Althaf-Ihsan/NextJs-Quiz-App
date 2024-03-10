import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
export default function DropdownDownOptions() {
  return (
   <section className='flex justify-evenly items-center py-5'>
<div className='px-7 py-4 w-1/3 mx-4'>
<DropdownMenu>
  <DropdownMenuTrigger className='flex outline-none w-full justify-between px-3 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-gray-100'>SELECT CATEGORY</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select Category</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

</div>
<div className='px-7 py-4 w-1/3 max-4'>
<DropdownMenu>
  <DropdownMenuTrigger className='flex outline-none w-full justify-between px-3 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-gray-100'>SELECT LEVEL</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select Level</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

</div>
<div className='px-7 py-4 w-1/3 max-4'>
<DropdownMenu>
  <DropdownMenuTrigger className='flex outline-none w-full justify-between px-3 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-gray-100'>SELECT TYPE</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select TYPE</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

</div>
   </section>
  )
}