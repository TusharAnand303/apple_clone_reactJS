import React from 'react'
import './Iphone.css'
import { Link } from 'react-router-dom'

const Iphone = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   videoRef.current.play();
  // }, []);

  // const video = "https://www.apple.com/105/media/us/home/2023/971ba7eb-fb12-44ed-b3ee-263ba5e5c602/anim/hero/small_2x.mp4"

  return (
    <>
      <div className='main'>
        <div className="page" style={{marginTop:"-170px"}}>
          <h1>iPhone 15 Pro</h1>
          <p>The first iPhone with an aerospace‑grade titanium design.</p>
          <p>A17 Pro, a game‑changing chip. A customisable</p>
          <p>Action button. The most powerful iPhone camera system.</p>
          <p style={{marginBottom:"20px"}}>And USB‑C with USB 3 for superfast transfer speeds.*</p>
          <div className='buttons'>
            <Link to='/iphonecat'>
            <button>Buy now</button>
            </Link>
          </div>
          {/* <video type="video/mp4" src={video} autoPlay="on" ref={videoRef} loop="on" >
          </video> */}
          <img style={{marginTop:"50px",marginBottom:"-50px"}} src="https://www.apple.com/v/iphone-15-pro/a/images/overview/welcome/hero__iztc7m63bfiy_large.jpg" alt="" />
        </div>
        <div className="page1">
        </div>
        {/* iphone section  */}
        <h1 className='hero_h1'>iPhone. <br />
            Forged in titanium.</h1>
        <div className='hero'>
            <img className='image_hero' src="https://www.apple.com/v/home/takeover/i/images/overview/announced/iphone-15-pro/iphone15_pro__e2m7nqh53cmu_large.jpg" alt="hero image" />
            {/* <video type="video/mp4" src={video2} autoPlay="on" ref={videoRef} loop="on" style={{height:"400px",marginTop:"40px"}} ></video> */}
        </div>
      </div>
      {/* camera section  */}
      <div className='camera'>
      <h1>A camera that captures your <br /> wildest imagination.</h1>
        <p>From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.</p>
        <img src="https://www.apple.com/v/iphone-15-pro/a/images/overview/camera/camera__bo5k5tfk6cmu_large.jpg" alt="" />
      </div>
      {/* charger section  */}
      <div className='charger'>
        <h1>Gigablast <br></br>your gigabits.</h1>
        <div className='charger_main'>
          <div className='left'>
          <p>iPhone 15 Pro is the first iPhone to support USB 3,5 for <span>huge leap in data transfer speeds</span> and faster pro workflows than ever before.</p>
          <p>The new USB‑C connector lets you <span>charge your Mac or iPad with the same cable you use to charge iPhone 15 Pro.</span> Bye‑bye, cable clutter.</p>
          </div>
          <div className='right'>
            <p>Up to</p>
            <h2>20x faster</h2>
            <p>file transfers</p>
          </div>        
        </div>
        <img src="https://www.apple.com/in/iphone-15-pro/images/overview/usb-c/usbc__dqdn0phay4mu_large.jpg" alt="" />
      </div>

      {/* ios17 section  */}
      <div className='ios'>
        <h2>iOS 17</h2>
        <h3>Style it out. Swap it over Sticker it up.</h3>
        {/* <h1>Gigablast <br></br>your gigabits.</h1> */}
        <img src="https://www.apple.com/in/iphone-15-pro/images/overview/ios-17/ios17__cntyeyuhlbki_large.jpg" alt="" />
      </div>

      {/* keep exploring iphones  */}
      <h1 className='lastt'>Keep exploring iPhone.</h1>
    </>
  )
}

export default Iphone
