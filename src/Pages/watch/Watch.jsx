import React from 'react'
import './Watch.css'
import { Link } from 'react-router-dom'

const Watch = () => {
  return (
    <>
    <div className="watch">
      
      <img src="https://www.apple.com/v/watch/be/images/overview/series-9/logo_watch_s9__cgsiv960o2eu_medium_2x.png" alt="" />
      <Link to='/watchcat'>
      <button>Buy now</button>
      </Link>
      <img className='img2' src="https://www.apple.com/in/watch/home/images/overview/series-9/tile_s9__cqgqgjzc261y_small_2x.jpg" alt="" />
    </div>

    {/* second section  */}
    <div className="ultra">
      <img style={{marginTop:"50px"}} src="https://www.apple.com/v/watch/be/images/overview/ultra/logo_watch_ultra_2__f3dcuqw87r2i_medium_2x.png" alt="" />
      <img style={{width:"100%",marginBottom:"50px"}} src="https://www.apple.com/in/watch/home/images/overview/ultra/tile_ultra_2__cu2x3w2l0zwy_small_2x.jpg" alt="" />
    </div>

    {/* third section  */}
    <div className='watch_third'>
      <h1 style={{marginBottom:"50px"}}>The watch comes with s9 chip inside</h1>
      <img style={{width:"100%",marginBottom:"100px"}} src="https://www.apple.com/in/watch/home/images/overview/ultra/tile_ultra_2__cu2x3w2l0zwy_small_2x.jpg" alt="" />
    </div>
    </>
  )
}

export default Watch
