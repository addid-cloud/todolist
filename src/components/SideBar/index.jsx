"use client"
import React, { useState } from 'react'
import File from "pixelarticons/svg/file.svg";
import { ListDashes,ListChecks,Note   } from '@phosphor-icons/react/dist/ssr'



export default function SideBar({setAitem,activeItem}) {
  const itemsArray = [
  {title:'list yang belom kelar',icons:<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8'> <path d="M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z" fill="currentColor" /> </svg>, component:'Todo'}, 
  {title:'list yang udah kelar',icons:<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8'> <path d="M19 4h2v2h-2V4zm-2 4V6h2v2h-2zm-2 0h2v2h-2V8zm0 0h-2V6h2v2zM3 6h8v2H3V6zm8 10H3v2h8v-2zm7 2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2h2zm0 0v2h2v-2h-2z" fill="currentColor"/> </svg>, component:'TodoClear'},
  {title:'catatan',icons:<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8'> <path d="M3 2h18v14h-2v2h-2v-2h-2v2h2v2h-2v2H3V2zm2 2v16h8v-6h6V4H5z" fill="currentColor"/> </svg>, component:'TodoNote'},
  {title:'Music',icons:<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8'> <path d="M8 4h12v16h-8v-8h6V8h-8v12H2v-8h6V4zm0 10H4v4h4v-4zm10 0h-4v4h4v-4z" fill="currentColor"/> </svg>, component:'MusicPlayer'},
] 
  
  return (
    <>
    <div className='flex flex-col bg-slate-900  w-1/4 p-2 h-[97vh] rounded-s-xl'>
        <div className='flex flex-row items-center  p-2 rounded-lg mb-7'>
          <h1 className='bg-gradient-to-tr from-sky-400 to-purple-200 text-white text-2xl p-2 rounded font-sans  font-semibold mr-2'>Wl</h1>
          <div className='flex flex-col'>
        <h2 className='text-2xl leading-tight text-white'>
        Whosslip <br />
        <span className='text-base text-slate-200 leading-tight'>To do list web</span>
        </h2>
          </div>
        </div>
        <div className='flex flex-col items-start p-2 gap-y-2 '>
          {itemsArray.map((item,index)=>(
            <div key={index} className={`cursor-pointer w-full p-2 rounded ${item.component === activeItem ? 'bg-sky-300 text-white' : 'bg-slate-300'}`}
            onClick={()=>setAitem(item.component)}>
            <div className='flex flex-row items-center'>
                {item.icons}
            <h3 className='mx-2 w-fit'>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}
