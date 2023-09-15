import React, { useEffect, useState } from 'react'
import './Iphonedetails.css'
import { Link, useParams } from 'react-router-dom';
import { IphoneData } from '../../categories/iphonecat/IphoneData';

const Iphonedetails = ({handleClick}) => {
  const { id } = useParams();
  const phone = IphoneData.find(item => item.id === parseInt(id));


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <>
    <div className='iphonedetails'>
         <h1 className='mobileview'>{phone.name}</h1>
        <div className='iphoneimage'>
        <img src={phone.image} alt={phone.name} />
        </div>
        <div className='iphone_data'>
        <h1>{phone.name}</h1>
        <h3>{phone.title}</h3>
        <p>{phone.desc}</p>
        <h4>From ₹{phone.price}</h4>
        <button onClick={()=>handleClick(phone)} >Add to cart</button>
        <Link to='/iphonecat' style={{marginLeft:"30px"}} className='iphone_goback'>
        <button>Go back</button>
        </Link>
        </div>
    </div>
    
   </>
  )
}

export default Iphonedetails
