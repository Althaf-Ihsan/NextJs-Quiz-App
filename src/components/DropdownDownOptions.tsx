"use client"
import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Check, ChevronDown, ChevronRight, Circle } from "lucide-react"
import useQuiz from '@/store/Index'
  type CategoryType={
    id:number,
    name:string
  }
  const Type=["Boolean","Multiple"]
  const level=["Easy","Medium","Hard"]
export default function DropdownDownOptions() {
  const addCategory=useQuiz(state=>state.addCategory)
  const addLevel=useQuiz(state=>state.addLevel)
  const addType=useQuiz(state=>state.addType)
  const config=useQuiz(state=>state.config)
  const [categories,setCategories]=useState<CategoryType[]>([])
  useEffect(()=>{
    async function fetchCategory() {
      const{trivia_categories}=await(await fetch("https://opentdb.com/api_category.php")).json()
      setCategories([...trivia_categories])
    }
    fetchCategory()
  },[])
  return (
   <section className='flex justify-evenly items-center py-5'>
<div className='px-7 py-4 w-1/3 mx-4'>
<DropdownMenu>
  <DropdownMenuTrigger className='flex outline-none w-full justify-between px-3 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-gray-100'>{config.name?config.name:'CATEGORY'}<ChevronDown/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select Category</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {categories.map(category=><DropdownMenuItem key={category.name} onClick={()=>addCategory(category.id,category.name)}>{category.name}</DropdownMenuItem>)}
    
  </DropdownMenuContent>
</DropdownMenu>

</div>
<div className='px-7 py-4 w-1/3 max-4'>
<DropdownMenu>
  <DropdownMenuTrigger className='flex outline-none w-full justify-between px-3 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-gray-100'>{config.level?config.level:'SELECT LEVEL'}<ChevronDown/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select Level</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {level.map(level=><DropdownMenuItem key={level} onClick={()=>addLevel(level)}>{level}</DropdownMenuItem>)}
  </DropdownMenuContent>
</DropdownMenu>

</div>
<div className='px-7 py-4 w-1/3 max-4'>
<DropdownMenu>
  <DropdownMenuTrigger className='flex outline-none w-full justify-between px-3 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-gray-100'>{config.type?config.type:'SELECT TYPE'}<ChevronDown/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select TYPE</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {Type.map(Type=><DropdownMenuItem key={Type} onClick={()=>addType(Type)}>{Type}</DropdownMenuItem>)}
  </DropdownMenuContent>
</DropdownMenu>

</div>
   </section>
  )
}
