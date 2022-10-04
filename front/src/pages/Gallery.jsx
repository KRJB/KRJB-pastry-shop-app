import React, { useEffect, useState } from 'react'
import '../styles/gallery.css'
import gal1 from  "../Icons/gal1.jpg"
import gal2 from  "../Icons/gal2.jpg"
import gal3 from  "../Icons/gal3.jpg"
import gal4 from  "../Icons/gal4.jpg"
import gal5 from  "../Icons/gal5.jpg"
import Navbar from '../components/Navbar'
import { Modal } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'




const Gallery = () => {
  useEffect(()=>{
    AOS.init({duration:1500})
      },[])
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);


  return (
    <div>
        
        <Navbar/>


      <div className='gallery' >
      <img src={gal1} onClick={handleShow1} alt="" data-aos='slide-up'/>
      <Modal show={show1} onHide={handleClose1} >
      <img src={gal1}  alt=""/>
      </Modal>

      <img src={gal2} onClick={handleShow2}  alt="" data-aos='slide-up'/>
      <Modal show={show2} onHide={handleClose2}>
      <img src={gal2} style={{transform:'scale(1.2)'}} alt=""/>
      </Modal>

      <img src={gal3} onClick={handleShow3}  alt="" data-aos='slide-up'/>
      <Modal show={show3} onHide={handleClose3}>
      <img src={gal3} style={{transform:'scale(1.4)'}} alt="" />
      </Modal>

      <img src={gal4} onClick={handleShow4}  alt="" data-aos='slide-up'/>
      <Modal show={show4} onHide={handleClose4}>
      <img src={gal4} style={{transform:'scale(1.2)'}} alt="" />
      </Modal>

      <img src={gal5} onClick={handleShow5}  alt=""data-aos='slide-up'/>
      <Modal show={show5} onHide={handleClose5}>
      <img src={gal5} style={{transform:'scale(1.5)'}} alt=""/>
      </Modal>
      
      
      </div>
     
    <Footer/>
    </div>
  
  )
}

export default Gallery