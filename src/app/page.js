'use client'
import Image from 'next/image'
import Todo from '@/components/Todo'
import SideBar from '@/components/SideBar'
import TodoNote from '@/components/TodoNote'
import TodoClear from '@/components/TodoClear'
import { useState } from 'react'
import MusicPlayer from '@/components/MusicPlayer'

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('Todo')
  const renderComp =()=>{
    switch(activeComponent){
      case'Todo':
        return <Todo/>;
      case'TodoClear':
        return <TodoClear/>;
      case'TodoNote':
        return <TodoNote/>;
      case'MusicPlayer':
        return <MusicPlayer/>;
      default:
      return <Todo/>
    }
  }

  return (
    <div >
      <div className='flex  flex-row bg-zinc-950'>
      <SideBar setAitem={setActiveComponent} activeItem={activeComponent}/>
      {renderComp()}
      </div>
    </div>
  )
}
