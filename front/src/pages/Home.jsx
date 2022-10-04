import React from 'react'
import '../styles/home.css'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bag from  "../Icons/bag.png"
import delivery from  "../Icons/delivery.png"
import support from  "../Icons/support.png"
import quality from  "../Icons/quality.png"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


const Home = () => {
  useEffect(()=>{
AOS.init({duration:1000})
  },[])
  return (
    <div >
      <Navbar/>


     
      <div className='home'>
      <h2 data-aos='fade-up'>Best Tunisian Traditional Sweets</h2>        
      </div>
      <div className='div2' data-aos='fade-up'>
      <Link to ='/products' style={{textDecoration:'none'}}>
      <img src={bag}  alt="" />
      <h2 >DISCOVER OUR ONLINE STORE</h2> 
      </Link>
      </div>
      <h2 style={{textAlign:'center',color:'#9e9a7c'}} data-aos='fade-up'> OUR SERVICES</h2>
      <div className='div3' >
      <div className='div3-col' data-aos='flip-right'>
      <img src={delivery}  alt="" style={{padding:'10px 0'}}/>
      <h4>FAST DELIVERY</h4>
      </div> 

      <div className='div3-col'data-aos='flip-right'>
      <img src={quality}  alt="" style={{padding:'10px 0'}}/>
      <h4>BEST QUALITY</h4>
      </div>

      <div className='div3-col'data-aos='flip-right'>
      <img src={support}  alt="" style={{padding:'10px 0'}}/>
      <h4>CUSTOMER SERVICE</h4>
      </div>

      </div>
    
      

      <Footer/>

    </div>
  )
}

export default Home