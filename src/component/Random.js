import React from 'react';
import Spin from './Spin';
import './Random.css'
import useGif from '../hooks/useGif';
export default function Random() {
    const { dat, fetchapi, spinner } = useGif();
    console.log(dat);
    return (
        <div className='flex flex-col'>

            <div className='mydiv bg-white min-h-[20rem] bg-opacity-10 px-2 w-fit min-w-[50%] m-auto flex flex-col items-center mt-10'>
                <h1 className='text-white text-xl font-bold my-2'>Random GIF's</h1>
                {
                    spinner ? <Spin /> :
                        <img className='  max-w-96 max-h-96 rounded-lg my-4' src={dat} />
                }
            </div>
            <button onClick={() => fetchapi()} className='text-white w-fit m-auto text-xl bg-teal-600 bg-opacity-50 px-8 my-2 rounded-md py-2'>Generate</button>
        </div>

    );
}
