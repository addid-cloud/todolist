'use client'
import React from 'react'
import { useState } from 'react'
export default function Todo() {
    const [task,setTask] = useState('')
    const [taskarray,setTaskarray] = useState([])
    //handel input change
    const inputChange = (e)=>{
        setTask(e.target.value)
    }
    //handel submit
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(task.trim()){
            setTaskarray([...taskarray,task])
            setTask('')
            console.log(task)
        }
    }
    //handel delete
    const deleteSubmit =(index)=>{
        setTaskarray(taskarray.filter((_,i)=>i!==index))
    }
  return (
    <div className='w-full bg-slate-500 text-white p-4 rounded-e-lg'>
        <h1>Todo</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={inputChange} placeholder='masukan todo list' />
            <button type='submit'>tambahkan</button>
        </form>
        <div  className='w-full h-2 bg-white rounded my-4 '/>
        <ul className='w-full gap-y-3 flex flex-col'>
            {taskarray.map((task,index)=>(
                <div className='bg-slate-100 text-black flex flex-col items-start p-2'>
                <li key={index} className=''>{task} 
                </li>
                <button onClick={()=>deleteSubmit(index)}>delete</button>
                </div>
            ))}
        </ul>
    </div>
  )
}
