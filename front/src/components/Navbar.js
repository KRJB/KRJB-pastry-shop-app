import React from 'react'
import facebook from "../Icons/facebook.svg"
import instagram from "../Icons/instagram.svg"
import location from "../Icons/location.svg"
import phone from  "../Icons/phone.svg"
import logo from  "../Icons/logonajet.PNG"
import clock from  "../Icons/clock.svg"
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import Register from './Register';
import Login from "./Login"
import { Button } from 'react-bootstrap'
import { userLogout } from '../JS/actions/authAction';
import logout from"../Icons/logout.svg"
import Cart from './Cart'



const Navbar = () => {
  const dispatch = useDispatch()
  const {isAuth,user} = useSelector(state => state.authreducer);
 
  return (
    <div>   
    <header>
    <div>
    <a target="_blank" rel="noreferrer" href='https://www.facebook.com/P%C3%A2tisserie-Madame-Najet-Ziedi-2008673512704406'><img src={facebook} alt="f"/></a>
    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/patisserie_madame_najet_ziadi/'>
    <img src={instagram} alt=""/></a>
    <a target="_blank" rel="noreferrer" href='https://www.google.com/maps/place/P%C3%A2tisserie+Madame+Najet/@36.8033841,10.1306649,15z/data=!4m6!3m5!1s0x12fd33b427f08d25:0xd7568b691cdf3d91!8m2!3d36.8033841!4d10.1306649!16s%2Fg%2F11d_77f9mt?hl=fr-tn'><img src={location} alt=""/></a>
    </div>
    
    

    {!isAuth ?
     <>
    <Register />
    <Login />
    </>
    : 
    <>
    <span style={{color :"white"}}> <strong>Welcome :</strong>{user.name}</span>
    <Button  style={{backgroundColor: 'transparent',borderStyle: 'none'}} onClick={()=> dispatch(userLogout())} >
    <img style={{ height:'18px'}}src={logout} alt=""/> Logout
    </Button>
    </>
  }
    {isAuth && user.isAdmin ?  null:<Cart/>}    
    

        
    </header>

<nav className='shadow' >

<div className='container1' >

    <div className='contact'>
        <img src={phone} alt=""/>
        <div>
            <h5>Call us: (+216) 22 572 258</h5>
            <h6>E-mail : Najet.Ziadi@gmail.com</h6>
        </div>
    
    </div>

   
      <img className='responsive' src={logo} alt=""/>
    
   
    <div className='contact'>
      <img src={clock} alt=""/>
            <div>
                <h5>Working Hours:</h5>
                <h6>7 days (8.00am - 8.00pm)</h6>
            </div>
    </div>
</div>

<div className='container2 '>


<Link to ='/' className='link'>
<p >Home</p>
</Link>
<Link to ='/products' className='link'>
<p >Products</p>
</Link>
<Link to ='/Gallery' className='link'>
<p >Gallery</p>
</Link>
<Link to ='/About' className='link'>
<p >About</p>
</Link>
{isAuth && user.isAdmin ?   <Link to="/Orders" className='link'>
      <p >Orders</p>
    </Link>:null}

</div>

</nav></div>
  )
}

export default Navbar