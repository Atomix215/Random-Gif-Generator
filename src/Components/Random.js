import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const {gif,loading,fetchDesiredData} = useGif();

  function clickHandler(){
    fetchDesiredData();
  }
  
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>

      <h1 className="text-xl underline uppercase font-bold mt-5">A Random GIF</h1>

      {
        loading?(<Spinner/>):(<img src={gif} width='450'/>)
      }

      

      <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-5">
      Generate
      </button>

    </div>
  );
}

export default Random