import React, { useEffect, useState } from 'react'
import {Button, Card} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../JS/actions/shopActions';
import '../styles/cart.css'
import '../styles/products.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const ProductTemplate = ({products}) => {
  useEffect(()=>{
    AOS.init({duration:1000})
      },[])


  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  

  const addToCartHandler = () => {
    
    dispatch(addToCart(products._id,qty));
    
  };

  return (
    <div className='product-card' data-aos='flip-right'>
        <Card style={{ width: '15rem', minHeight:'420px' }}>
          <Card.Img variant="top" src={products.image} style={{maxHeight:'250px'}} />
          <Card.Body >
            <Card.Title>{products.name}</Card.Title>
            <Card.Text>{products.price} DT/100g</Card.Text>
          </Card.Body>
          <div style={{display:'flex',alignItems:'center',justifyContent: 'space-around'}}>
          <Button id='add'   onClick={addToCartHandler}>      
            Add To Cart
          </Button>
          <input className="input" type="number" value={qty} onChange={(e) => setQty(e.target.value)} min="1" ></input>
          </div>

          
        </Card>
  </div>
  )
}

export default ProductTemplate