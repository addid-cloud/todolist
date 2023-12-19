import callYouTubeMusicApi from '@/utils/api'
import React, { useEffect } from 'react'

// async function fetchData(){
//   try{
//     const data = await callYouTubeMusicApi('recommend')
//     console.log(data)
//   } catch (err){
//     console.log(err.massage)
//   }
// }

const MusicPlayer = () => {
  // useEffect(()=>{
  //   fetchData()
  // },[])
  return (
<div className='w-full bg-slate-500 text-white p-4 rounded-e-lg'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Voo86mlxZvA?si=-PRgCHYniCAFViP7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
  )
}

export default MusicPlayer