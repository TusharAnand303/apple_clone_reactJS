import React, { useState } from 'react';
import "./Footer.css";


const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <div className='footer'>
        <input type="text" placeholder='Enter your email' />
        <button>JOIN US</button>
      </div>
      <div className='footer_last'>
        <p>All rights reserved by <span>ⒸApple.co</span></p>
        <p style={{ marginTop: "-30px", fontSize: "14px" }}>Made with &#9829; by <span>Tushar Anand</span></p>
      </div>
      {showScroll && (
         <div className="scroll_to_top" onClick={scrollTop}>
         <i class="ri-arrow-up-line"></i>
        </div>
      )}
    </>
  );
};

export default Footer;
