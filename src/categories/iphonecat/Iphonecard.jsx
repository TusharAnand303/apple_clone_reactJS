import React from 'react'
import './Iphonecard.css'
import { Link } from 'react-router-dom';

const iphoneCard = (props) => {

    const details_data = props.iphonedata;

  return (
    <div className='iphonecard'>
    <h1>{details_data.name}</h1>
    <h3>{details_data.title}</h3>
    <img src={details_data.image}/>
    <h4>From ₹{details_data.price}</h4>
    <Link to={`/iphonedetails/${details_data.id}`}>
      <button>Buy now</button>
    </Link>
    </div>
  )
}

export default iphoneCard
