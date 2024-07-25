import React from 'react'
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="spinner"></div>
        <div>Loading...</div>
    </div>
  )
}

export default Spinner