import React from 'react'
import useGif from '../hooks/useGif'
import { useState } from 'react';
import Spin from './Spin';
import './Taggif.css'
export default function Taggif() {
  const [tag, settag] = useState(' ');
  const { dat, fetchapi, spinner } = useGif(tag)
  // console.log(tag);
  return (
    <div className=' flex flex-col'>

      <div className='mydiv bg-white min-h-[45vh] bg-opacity-10 px-2 w-fit min-w-[50%] m-auto flex flex-col items-center'>
        <h2 className='text-white text-xl font-bold my-2'>Random {tag} Gif</h2>
        {dat && spinner ? <Spin /> : <img src={dat} className=' max-w-96 max-h-96 rounded-lg my-4' />}
         <input type='text' placeholder='type here' className=' w-full m-auto px-2 py-1 rounded-lg' onChange={(event) => settag(event.target.value)} />
      </div>
      <button onClick={()=>fetchapi(tag)} className='text-white mypar items-baseline w-fit mx-auto text-xl bg-teal-600 bg-opacity-50 px-8 my-2 rounded-md py-2'>Generate</button>
    </div>
  )
}
