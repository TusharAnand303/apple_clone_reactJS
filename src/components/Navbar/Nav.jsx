import React,{useRef, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import applebag from './bag.svg'
import mainapple from './apple.svg'
import applesearch from './search.svg'

import './Nav.css'

const Nav = ({size}) => {

  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
  }

  useEffect(() => {
    if (navRef.current.classList.contains("responsive_nav")) {
      navRef.current.classList.remove("responsive_nav");
    }
  }, [location.pathname]);

  return (
    <header>
      <Link to='/' style={{color:"white"}}>
      <h3 style={{fontSize:"70px"}}>
        <img src={mainapple} alt="" />
      </h3>
      </Link>
     
      <nav ref={navRef}>
     <div className='close'>
     <button onClick={showNavbar} className='nav_btn nav_close_btn'>
          <FaTimes />
        </button>
     </div>
        <Link to='/mac' style={{textDecoration: "none"}}>
        <span >Mac</span>
        </Link>
        <Link to='/ipad' style={{textDecoration: "none"}}>
        <span >iPad</span>
        </Link>
        <Link to='/iphone' style={{textDecoration: "none"}}>
        <span >iPhone</span>
        </Link>
        <Link to='/watch' style={{textDecoration: "none"}}>
        <span >Watch</span>
        </Link>
        <Link to='/vision' style={{textDecoration: "none"}}>
        <span >Vision</span>
        </Link>
        <Link to='/airpods' style={{textDecoration: "none"}}>
        <span >AirPods</span>
        </Link>
        <Link to='/accessories' style={{textDecoration: "none"}}>
        <span >Accessories</span>
        </Link>
        <Link to='/support' style={{textDecoration: "none"}}>
        <span >Support</span>
        </Link>
       <div className='nav_content'>
       <Link style={{textDecoration: "none"}}>
        <img src={applesearch} alt="" className='hid' />
        </Link>
        <Link to='/cart' style={{textDecoration: "none"}}>
        <img src={applebag} alt="" className='hid' />
        </Link>
        <span className='hidd'>{size}</span>
       </div>
       
      </nav>
     <div className='main_logo'>
      <button onClick={showNavbar} className='nav_btn '>
        <img src={applesearch} alt="" />
      </button>
      <button onClick={showNavbar} className='nav_btn '>
        <img src={applebag} alt="" className='bag' />
        <span style={{fontSize:"18px"}}>0</span>
      </button>
      <button onClick={showNavbar} className='nav_btn '>
        <FaBars />
      </button>
     </div>
    </header>
  )
}

export default Nav


