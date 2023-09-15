import React from 'react'
import './Mac.css';
import { Link } from 'react-router-dom';

const Mac = () => {
  return (
    <>
    <div className='mac'>
      <img src="https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro__cww8m2vra4uq_large_2x.jpg" alt="" />
      <div className='mac_about'>
      <Link to='/maccat'>
      <button className='mac_button'>Buy now</button>
      </Link>
        <h1><span >Mover. Maker.</span><br></br>Boundary breaker.</h1>
        <p>Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance .</p>
        <h2>From ₹199900.00*</h2>
      </div>
    </div>

    {/* super section  */}
   <div className='super'>
      <img src="https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/performance/m2_bg__e4dkdscoyaaa_large_2x.jpg" alt="" />
      <div className='charge'>
      <img src="https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/performance/m2_pro__b7uv52zba4gi_large_2x.png" alt="" />
      
      <img src="https://apple.com/v/macbook-pro-14-and-16/e/images/overview/performance/m2_max__e13iuf4f0rau_large_2x.png" alt="" />
      </div>
      <div className='content'>
      <h3>Up to 12-core CPU
          Up to 19-core GPU
          Up to 32GB unified memory
          200GB/s memory bandwidth</h3>
          <h3>Up to 12-core CPU
          Up to 19-core GPU
          Up to 32GB unified memory
          200GB/s memory bandwidth</h3>
      </div>
   </div>

   {/* charge section  */}
   <div className='lapi'>
      <h1>Choose your size.<br/> Choose your chip.
      Let it rip.</h1>
      <img src="https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/performance/choose_size__b11uc4j8f36u_large_2x.jpg" alt="" />
   </div>
    {/* charge section  */}
    <div className='lapi2'>
      <h1>Choose your size.<br/> Choose your chip.
      Let it rip.</h1>
      <img src="https://www.apple.com/in/macbook-pro-14-and-16/images/overview/routers/continuity__dvjjaffzqouq_large_2x.jpg" alt="" />
   </div>
   <div className='last'>

   </div>
    </>
  )
}

export default Mac
