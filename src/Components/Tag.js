import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [inputData,setInputData]=useState('');


  function changeHandler(event){
    setInputData(event.target.value);
  }

  const {gif,loading,fetchDesiredData} = useGif(inputData);

  function clickDesiredHandler(){
    fetchDesiredData();
  }

  

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>

      <h1 className="text-xl underline uppercase font-bold mt-5"> Random {inputData} GIF</h1>

      {
        loading?(<Spinner/>):(<img src={gif} width='450'/>)
      }

      <input
        type='text'
        className="w-10/12 text-center"
        onChange={changeHandler}
        value={inputData}
        placeholder='Enter your text here'
      />

      <button onClick={clickDesiredHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-5">
      Generate
      </button>

    </div>
  );
}

export default Tag