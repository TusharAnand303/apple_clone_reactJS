import React, { useEffect, useState } from 'react'
import './IphoneCat.css'
import {IphoneData} from './IphoneData';
import IphoneCard from './iphoneCard';
import { Tooltip } from '@mui/material';

const Iphonecat = ({handleClick}) => {

  const [iphonedata, setIphonedData] = useState('');

  console.log(iphonedata)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
    <center>
    <h1 className='iphonestock'>Available iPhones</h1>
   <div className='filter_iphone'>
   <div className='input_div'>
    <input type="text" placeholder='Search iPhones' onChange={(e)=>setIphonedData(e.target.value)} />
    <i className="ri-search-line"></i>
    </div>
   </div>
    </center>
    <div className='iphone'>
    {
      IphoneData.filter((data)=>{
        if(iphonedata === "")
        {
          return data;
        }
        else if(data.name.toLowerCase().includes(iphonedata.toLowerCase()))
        {
          return data;
        }
      }).map((data, index)=>{
        return (
          <IphoneCard key={data.id} iphonedata={data} handleClick={handleClick}/>
        )
      })
    }
    </div>
    </>
  )
}

export default Iphonecat

