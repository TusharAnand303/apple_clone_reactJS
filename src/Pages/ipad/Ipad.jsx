import React from 'react'
import './Ipad.css'
import { Link } from 'react-router-dom'

const Ipad = () => {
  return (
    <>
    <div className='ipad'>
      <h1>iPad Pro</h1>
      <h5>Supercharged by</h5>
      <Link to='/ipadcat' style={{marginBottom:"-190px",zIndex:"1"}}>
      <button className='tt'>Buy now</button>
      </Link>
      <img src="https://www.apple.com/v/ipad-pro/am/images/overview/hero/hero_startframe__gck1t26hu3am_large_2x.jpg" alt="" />
      <h2 className='de'>Astonishing <span style={{color:"white"}}>performance</span>. Incredibly advanced displays. Superfast wireless connectivity. Next-level Apple Pencil capabilities. Powerful new features in iPadOS 16. The ultimate iPad experience.</h2>
      <img src="https://www.apple.com/in/ipad-pro/images/overview/hero/hero_combo__fcqcc3hbzjyy_large_2x.jpg" alt="" />
      <h6 className='de2'>M2 chip.
      Next-generation performance.
      Next‑generation capabilities.</h6>
        </div>
        <img className='seci' src="https://www.apple.com/in/ipad-pro/images/overview/chip/performance_hero__cxya4f2p5euu_large_2x.jpg" alt="" />
        <p className='dep'><span style={{color:"white"}}>M2 chip</span>. The M2 chip is the next generation of Apple silicon, with an 8‑core CPU that delivers up to 15% faster performance and a 10‑core GPU that provides up to 35% faster graphics performance.1 With a 40% faster Neural Engine to accelerate machine learning tasks and 50% more memory bandwidth, M2 brings astonishing performance and new capabilities to iPad Pro. So you can create photorealistic 3D designs, build intricate AR models and play games with console‑quality graphics at high frame rates faster than ever. All while enjoying all‑day battery life.2</p>
    </>
  )
}

export default Ipad
