import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;




const useGif = (tag) => {

    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);

    const randomMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=memes`;

    const inputMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  

  
  
    async function fetchDesiredData(){
      setLoading(true);
      const {data}= await axios.get(tag?(inputMemeUrl):(randomMemeUrl));
      const imageSource=data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
  
    }
  
    useEffect(()=>{
      fetchDesiredData();
    },[]);

    return{gif,loading,fetchDesiredData};
  
  
    
  
    
}

export default useGif