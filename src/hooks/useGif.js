// hooks/useGif.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function useGif(tag) {
    const randomapi = 'https://api.giphy.com/v1/gifs/random?api_key=5qRGDdbKnul8UrUWf9U58wFJ5jKusJk7&tag=&rating=g';
    const [dat, setDat] = useState('');
    const [spinner,setspinner]=useState(false)
    
    async function fetchapi(tag)
    {
        setspinner(true);
        const taggif = `https://api.giphy.com/v1/gifs/random?api_key=5qRGDdbKnul8UrUWf9U58wFJ5jKusJk7&tag=${tag}&rating=g`;
        const data=await axios.get(tag ?taggif:randomapi);
        setDat(data.data.data.images.fixed_height.url)
        setspinner(false);
        console.log(data);
    }
    useEffect(()=>{
        fetchapi(tag);
    },[])
    return {dat,fetchapi,setspinner,spinner}
}
